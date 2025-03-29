import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/+51979949008"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp" // Buena práctica para accesibilidad
      className="fixed bottom-8 right-0 z-50" // Asegura que esté por encima de otros elementos
    >
      <Button
        // Hacemos el botón un círculo y quitamos padding para que el div interno controle el tamaño
        className="
          rounded-full
          p-0
          pr-4
          h-auto w-auto   // Dejamos que el contenido defina el tamaño del botón
          hover:bg-transparent
          focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 // Mejoras de foco
        "
        variant="ghost"
        aria-hidden="true" // El Link ya tiene el aria-label, podemos ocultar el botón a lectores de pantalla
        tabIndex={-1} // Evita que el botón sea enfocable además del Link
      >
        {/* Este div controlará el tamaño responsivo */}
        <div
          className="
            relative         /* Necesario para que Image con fill funcione */
            overflow-hidden  /* Asegura que la imagen no se salga si hay problemas */
            h-[70px] w-[70px]      /* Tamaño por defecto (sm y menor) */
            md:h-[120px] md:w-[120px] /* Tamaño para md y mayor */
            transition-all duration-200 ease-in-out /* Opcional: transición suave */
          "
        >
          <Image
            src="/icons/wsp.webp"
            alt="Icono de WhatsApp" // El alt debe describir la imagen, el Link/aria-label el propósito
            fill // Hace que la imagen llene el div padre (el que tiene position: relative)
            sizes="(max-width: 768px) 70px, 120px" // Ayuda a Next/Image a elegir la fuente correcta
            className="object-contain" // Asegura que la imagen se ajuste sin distorsionarse
          />
        </div>
        <span className="sr-only">Contactar por WhatsApp</span>
      </Button>
    </Link>
  );
}
