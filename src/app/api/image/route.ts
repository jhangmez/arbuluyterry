// api/image/route.ts
import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

export const runtime = 'edge';

async function getDefaultImageResponse(): Promise<NextResponse> {
  try {
    const defaultImagePath = path.join(process.cwd(), 'public', 'images', 'user.webp');
    const defaultImageBuffer = await fs.readFile(defaultImagePath);
    return new NextResponse(defaultImageBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/webp',
        'Cache-Control': 'public, max-age=604800, immutable',
      },
    });
  } catch (fallbackError) {
    console.error("Error al leer la imagen por defecto:", fallbackError);
    return new NextResponse('Error interno del servidor al obtener imagen por defecto', { status: 500 });
  }
}
// --- Fin Helper ---


export async function GET(request: NextRequest) {
  const imageUrlParam = request.nextUrl.searchParams.get('url');

  if (!imageUrlParam) {
    return new NextResponse('URL de imagen no proporcionado', { status: 400 });
  }

  // --- Construcción de la URL Absoluta (ANTES del try...catch) ---
  let absoluteImageUrl: string;
  try {
    if (imageUrlParam.startsWith('/')) {
      const origin = request.nextUrl.origin;
      if (!origin) {
         // Esto es muy improbable en una solicitud real, pero es una verificación segura
         throw new Error("No se pudo determinar el origen de la solicitud para construir la URL absoluta.");
      }
      absoluteImageUrl = `${origin}${imageUrlParam}`;
    } else {
      // Validar que sea una URL HTTP/HTTPS básica si no es relativa
      const parsedUrl = new URL(imageUrlParam); // Esto lanzará un error si no es una URL válida
      if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
          throw new Error("La URL proporcionada debe ser absoluta (http/https) o relativa (empezar con /)");
      }
      absoluteImageUrl = imageUrlParam; // Ya es absoluta y válida (básicamente)
    }
  } catch (urlError) {
      // Si falla la construcción o validación de la URL
      console.error(`Error procesando parámetro URL '${imageUrlParam}':`, urlError);
      // Puedes devolver un 400 Bad Request o la imagen por defecto
      // return new NextResponse('URL de imagen inválida', { status: 400 });
      return await getDefaultImageResponse(); // Devolver imagen por defecto si la URL original es mala
  }
  // --- Fin Construcción URL ---


  // --- Intento de Fetch y Procesamiento ---
  try {
    const imageResponse = await fetch(absoluteImageUrl);

    if (!imageResponse.ok) {
      throw new Error(`Error al obtener la imagen desde ${absoluteImageUrl}: ${imageResponse.status} ${imageResponse.statusText}`);
    }

    const imageBuffer = await imageResponse.arrayBuffer();

    const webpBuffer = await sharp(imageBuffer)
      .webp({ quality: 80 })
      .toBuffer();

    return new NextResponse(webpBuffer, {
      headers: {
        'Content-Type': 'image/webp',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });

  } catch (processingError) {
    // --- Manejo de Errores (Fetch o Sharp) ---
    console.error(`Error procesando imagen ${imageUrlParam} (desde ${absoluteImageUrl}):`, processingError);
    return await getDefaultImageResponse(); // Devuelve la imagen por defecto
  }
}