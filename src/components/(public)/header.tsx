"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown, Facebook } from "lucide-react"; // Import Facebook icon
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";
import { toast } from "sonner"; // Import toast from sonner

// Estructura de navItems con submenús
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

// --- TopBar Component ---
function TopBar() {
  const isSm = useMediaQuery("(max-width: 640px)"); // Check for sm breakpoint
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string, type: "number" | "email") => {
    if (isCopied) return;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        const message = type === "number" ? "Número copiado" : "Correo copiado";
        toast.success(message, {
          duration: 2000, // Set the duration in milliseconds (e.g., 2000ms = 2 seconds)
        });
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        toast.error("Error al copiar");
      });
  };

  return (
    <div className="bg-crema py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left (Facebook) */}
        <div className="flex items-center">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-6 w-6 text-gray-600 hover:text-blue-500" />
          </Link>
        </div>

        {/* Right (Number and Email) / Center (Number) on sm */}
        <div
          className={
            isSm
              ? "flex items-center justify-center w-full"
              : "flex items-center"
          }
        >
          {!isSm && (
            <>
              <Button
                variant="link"
                className="text-gray-600 hover:text-gray-800 mr-4"
                onClick={() => copyToClipboard("+51979949008", "number")}
              >
                +51 979949008
              </Button>
              <Button
                variant="link"
                className="text-gray-600 hover:text-gray-800"
                onClick={() => copyToClipboard("mterryra@hotmail.com", "email")}
              >
                mterryra@hotmail.com
              </Button>
            </>
          )}
          {isSm && (
            <Button
              variant="link"
              className="text-gray-600 hover:text-gray-800"
              onClick={() => copyToClipboard("+51979949008", "number")}
            >
              +51 979949008
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Header Component (Modified) ---
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      setIsScrolled(scrollY > 20);
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return (
    <>
      <TopBar /> {/* Add the TopBar here */}
      <header
        className={`sticky top-0 z-50 w-full bg-gradient-to-t from-transparent to-primary/15 transition-all duration-300 font-titulo ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container mx-auto flex h-32 items-center justify-between px-4">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold flex-row flex items-center justify-center gap-2"
            >
              <Image
                src="/images/arbuluyterry.webp"
                width={100}
                height={100}
                alt="Logo de arbuluyterry"
                priority
              />
            </Link>
          </div>

          {/* Navegación para Desktop */}
          <nav className="hidden md:flex items-center space-x-5">
            {navItems.map((item, index) => (
              <div key={`${index}-${item.name}`} className="relative group">
                {item.subItems ? (
                  <>
                    <Button
                      variant="ghost"
                      className="font-medium flex items-center"
                      onMouseEnter={() => setOpenSubMenu(item.name)}
                      onMouseLeave={() => setOpenSubMenu(null)}
                    >
                      {item.name}
                      <ChevronDown width={16} className="ml-1" />
                    </Button>
                    <div
                      className={`absolute left-1/2 -translate-x-1/2  bg-white border rounded-md shadow-lg  z-50
                                ${
                                  openSubMenu === item.name && isDesktop
                                    ? "block animate-fadeIn"
                                    : "hidden animate-fadeOut"
                                }`}
                      onMouseEnter={() => setOpenSubMenu(item.name)}
                      onMouseLeave={() => setOpenSubMenu(null)}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={`${index}-${subIndex}-${subItem.name}`}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Button asChild variant="ghost">
                    <Link href={item.href} className="text-lg font-medium">
                      {item.name}
                    </Link>
                  </Button>
                )}
              </div>
            ))}
            <Button asChild>
              <Link target="_blank" href="https://wa.me/+51979949008">
                Contáctanos
              </Link>
            </Button>
          </nav>

          {/* Navegación para Móvil */}
          <div className="flex md:hidden">
            <Sheet aria-describedby="Es un boton">
              <SheetTrigger aria-describedby="Es un boton" asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetTitle className="sr-only">
                Es un bonito sheet trigger
              </SheetTitle>
              <SheetDescription className="sr-only">
                Es un bonito trigger
              </SheetDescription>
              <SheetContent aria-describedby="Es un boton" side="left">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <div key={`${index}-${item.name}`}>
                      {item.subItems ? (
                        <>
                          <div className="flex items-center justify-start gap-2">
                            <button
                              className="text-lg font-medium font-titulo text-left"
                              onClick={() =>
                                setOpenSubMenu(
                                  openSubMenu === item.name ? null : item.name
                                )
                              }
                            >
                              {item.name}
                            </button>
                            <ChevronDown width={16} />
                          </div>
                          {openSubMenu === item.name && (
                            <div className="ml-4 space-y-2">
                              {item.subItems.map((subItem, subIndex) => (
                                <Link
                                  key={`${index}-${subIndex}-${subItem.name}`}
                                  href={subItem.href}
                                  className="block text-base font-medium font-titulo"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-lg font-medium font-titulo"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}

                  <Link
                    target="_blank"
                    href="https://wa.me/+51979949008"
                    className="text-lg font-medium font-titulo"
                  >
                    Contáctanos
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
