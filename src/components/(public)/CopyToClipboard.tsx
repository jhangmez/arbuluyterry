// components/ui/CopyToClipboard.tsx
"use client";

import React, { useRef, useCallback } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils"; // Opcional

interface CopyToClipboardProps {
  children: React.ReactNode;
  mensaje?: string;
  className?: string;
  elementToCopy?: string; // Sigue siendo opcional
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  children,
  mensaje = "Contenido copiado",
  className,
  elementToCopy, // Prop opcional
}) => {
  const contentRef = useRef<HTMLSpanElement>(null);

  const handleCopy = useCallback(async () => {
    let textToCopy = ""; // Inicializar la variable

    // 1. Determinar qué texto copiar
    if (elementToCopy !== undefined && elementToCopy !== null) {
      // Si elementToCopy se proporcionó explícitamente (incluso si es ""), úsalo.
      textToCopy = elementToCopy;
    } else {
      // Si elementToCopy NO se proporcionó, intenta obtener el texto de children.
      if (contentRef.current) {
        // La forma más robusta es usar el textContent del ref
        textToCopy = contentRef.current.textContent?.trim() ?? "";
      } else if (typeof children === "string") {
        // Fallback si el ref no está listo o children es solo un string
        textToCopy = children.trim();
      }
      // Podrías agregar más lógica aquí si children pudiera ser un número u otro tipo.
    }

    // 2. Validar si hay algo que copiar
    if (
      textToCopy === null ||
      textToCopy === undefined ||
      textToCopy.trim() === ""
    ) {
      // No copiar si el texto final es nulo, indefinido o solo espacios en blanco
      console.warn("Intento de copiar contenido vacío.");
      // Opcionalmente mostrar un toast de advertencia si lo deseas
      // toast.warning("No hay contenido válido para copiar.");
      return; // Salir de la función si no hay nada válido
    }

    // 3. Intentar copiar al portapapeles
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success(mensaje);
    } catch (err) {
      console.error("Error al copiar al portapapeles:", err);
      toast.error("Error al copiar.");
    }
  }, [children, mensaje, elementToCopy]); // Asegúrate que las dependencias estén correctas

  // Determinar el texto para el tooltip basado en lo que se copiará
  const tooltipText =
    elementToCopy !== undefined && elementToCopy !== null
      ? elementToCopy
      : typeof children === "string"
      ? children
      : "contenido"; // Simplificado para el tooltip

  return (
    <span
      ref={contentRef}
      onClick={handleCopy}
      className={cn(
        "cursor-pointer hover:opacity-80 transition-opacity",
        className
      )}
      title={`Copiar: ${tooltipText}`} // Tooltip actualizado
    >
      {children}
    </span>
  );
};

export default CopyToClipboard;
