// components/ui/UnderlinedHeading.tsx (o donde prefieras poner tus componentes UI)
import React from "react";

interface UnderlinedHeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // Elemento a renderizar
  className?: string; // Clases adicionales
  borderColor?: string; // Clase para el color del borde (ej: 'border-primary')
  borderWidth?: string; // Clase para el grosor del borde (ej: 'border-b-2')
  paddingBottom?: string; // Clase para el espacio debajo del texto (ej: 'pb-1')
}

const UnderlinedHeading: React.FC<UnderlinedHeadingProps> = ({
  children,
  as: Tag = "h1", // Valor por defecto 'h1'
  className = "",
  borderColor = "border-primary", // Color por defecto
  borderWidth = "border-b", // Grosor por defecto
  paddingBottom = "pb-1", // Espacio por defecto
}) => {
  return (
    // El contenedor padre se encarga de centrar el heading inline-block
    <div className="text-center mb-8 md:mb-12">
      <Tag
        className={`
          inline-block
          font-bold font-play
          ${borderColor}
          ${borderWidth}
          ${paddingBottom}
          ${className}
        `}
      >
        {children}
      </Tag>
    </div>
  );
};

export default UnderlinedHeading;
