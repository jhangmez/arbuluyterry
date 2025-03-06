import Link from "next/link";
import { Facebook } from "lucide-react";
import Image from "next/image";

interface FooterProps {
  color?: string;
}

// Reutilizamos la estructura de navItems del Header para mantener la consistencia
const navItems = [
  { name: "Nosotros", href: "/nosotros" },
  {
    name: "Servicios",
    href: "/servicios",
    subItems: [
      { name: "Urbanismo", href: "/servicios/urbanismo" },
      { name: "Medio Ambiente", href: "/servicios/medio-ambiente" },
    ],
  },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Equipo", href: "/equipo" },
  { name: "Contacto", href: "/contacto" },
];

export function Footer({ color }: FooterProps) {
  const footerBgClass = color?.startsWith("#")
    ? { backgroundColor: color }
    : "bg-primary";

  return (
    <footer
      className={`text-primary-foreground ${
        typeof footerBgClass === "string" ? footerBgClass : ""
      }`}
      style={typeof footerBgClass === "object" ? footerBgClass : undefined}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 font-cuerpo">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold font-titulo flex-row flex items-center  gap-2"
            >
              <Image
                src="/images/arbuluyterry.webp"
                width={100}
                height={100}
                alt="Logo de arbuluyterry"
              />
            </Link>
            <p className="mt-4 text-sm">
              Síguenos en nuestras redes sociales para estar al día con las
              últimas noticias y actualizaciones.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61570478128979"
                className="hover:text-amarillo"
                target="_blank"
              >
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Sección "Páginas" -  Estructura Principal */}
          <div>
            <h3 className="text-lg font-semibold font-titulo select-none text-amarillo">
              Páginas
            </h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-amarillo"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sección "Servicios" -  Submenú */}
          <div>
            <h3 className="text-lg font-semibold font-titulo select-none text-amarillo">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2">
              {navItems
                .find((item) => item.name === "Servicios")
                ?.subItems?.map((subItem) => (
                  <li key={subItem.href}>
                    <Link
                      href={subItem.href}
                      className="text-sm hover:text-amarillo"
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Sección Contacto */}
          <div>
            <h3 className="text-lg font-semibold font-titulo select-none text-amarillo">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="https://wa.me/+51979949008"
                  className="text-sm hover:text-amarillo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultas
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto#form" // Enlace directo a la página de contacto
                  className="text-sm hover:text-amarillo"
                >
                  Formulario de Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-xs font-cuerpo">
            © 2025 Arbulú & Terry S.A.C Perú. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
