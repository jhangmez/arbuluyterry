"use client";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { toast } from "sonner";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

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

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string, type: "number" | "email") => {
    if (isCopied) return;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        const message = type === "number" ? "Número copiado" : "Correo copiado";
        toast.success(message, { duration: 2000 });
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        toast.error("Error al copiar");
      });
  };

  return (
    <footer
      className={`text-primary-foreground ${
        typeof footerBgClass === "string" ? footerBgClass : ""
      }`}
      style={typeof footerBgClass === "object" ? footerBgClass : undefined}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 font-play">
          {/* Logo and Social Media */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold font-play flex-row flex items-center  gap-2"
            >
              <Image
                src="/images/arbuluyterry.webp"
                width={100}
                height={100}
                alt="Logo de arbuluyterry"
              />
            </Link>
            <p className="mt-4 text-sm">Síguenos en nuestras redes sociales:</p>
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://www.facebook.com/arbuluyterrysac"
                className="hover:text-amarillo"
                target="_blank"
              >
                <FaFacebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Sección "Páginas" */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold font-play select-none text-amarillo">
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

          {/* Sección "Servicios" */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold font-play select-none text-amarillo">
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

          {/* Contact Information (2 Columns on lg and xl) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold font-play select-none text-amarillo">
              Contacto
            </h3>
            <div className="mt-4 space-y-3">
              {/* Phone Number */}
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <button
                  onClick={() => copyToClipboard("+51979949008", "number")}
                  className="text-sm hover:text-amarillo"
                >
                  +51 979949008
                </button>
              </div>

              {/* Email Address */}
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <button
                  onClick={() =>
                    copyToClipboard("mterryra@hotmail.com", "email")
                  }
                  className="text-sm hover:text-amarillo"
                >
                  mterryra@hotmail.com
                </button>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2">
                <Link
                  href="https://wa.me/+51979949008"
                  className="text-sm hover:text-amarillo flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="h-5 w-5 mr-2" />
                  <span>WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-xs font-play">
            © 2025 Arbulú & Terry S.A.C Perú. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
