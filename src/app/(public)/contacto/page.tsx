// app/contacto/page.tsx
import { Header } from "@/components/(public)/header";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";
import UnderlinedHeading from "@/components/(public)/UnderlinedHeading";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import CopyToClipboard from "@/components/(public)/CopyToClipboard"; // Asegúrate que la ruta sea correcta
import Image from "next/image";

export default function ContactoPage() {
  const contactDetails = [
    {
      icon: <FaPhoneAlt className="w-5 h-5 text-primary" />,
      label: "Teléfono Fijo",
      value: "074-452282",
      copyValue: "074452282",
      href: "tel:074452282",
    },
    {
      icon: <FaPhoneAlt className="w-5 h-5 text-primary" />, // Podrías usar FaMobileAlt
      label: "Celulares",
      items: [
        { value: "979955944", copyValue: "979955944", href: "tel:979955944" },
        { value: "979949008", copyValue: "979949008", href: "tel:979949008" },
      ],
    },
    {
      icon: <FaEnvelope className="w-5 h-5 text-primary" />,
      label: "Correos Electrónicos",
      items: [
        {
          value: "eprach@yahoo.com",
          copyValue: "eprach@yahoo.com",
          href: "mailto:eprach@yahoo.com",
        },
        {
          value: "mterryra@hotmail.com",
          copyValue: "mterryra@hotmail.com",
          href: "mailto:mterryra@hotmail.com",
        },
      ],
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5 text-primary" />,
      label: "Dirección",
      value: "Jr. Tacna 575, Chiclayo, Lambayeque, Perú.",
      copyValue: "Jr. Tacna 575 Chiclayo, Lambayeque, Perú.",
      mapLink: "https://maps.app.goo.gl/WSBNaxMRRzGTzK2v7",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col font-play">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <UnderlinedHeading
              as="h1"
              className="text-3xl md:text-4xl lg:text-5xl"
              paddingBottom="pb-3 md:pb-4"
            >
              Contáctenos
            </UnderlinedHeading>
            <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-10 md:mb-12">
              Estamos aquí para ayudarle. Si tiene alguna consulta sobre
              nuestros servicios o desea discutir un proyecto, no dude en
              comunicarse con nosotros a través de los siguientes canales.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Columna de Información de Contacto */}
              <div className="lg:col-span-3 bg-white p-6 md:p-10 rounded-xl shadow-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Información de Contacto Directo
                </h2>
                <div className="space-y-6">
                  {contactDetails.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 w-8 pt-1">{item.icon}</div>
                      <div className="ml-3">
                        <h3 className="text-lg font-semibold text-gray-700">
                          {item.label}
                        </h3>
                        {item.value && !item.items && (
                          <CopyToClipboard
                            mensaje="Copiado"
                            elementToCopy={item.copyValue || item.value}
                          >
                            <a
                              href={item.href || "#"}
                              className={`text-gray-600 hover:text-amarillo ${
                                item.href ? "hover:underline" : "cursor-pointer"
                              }`}
                            >
                              {item.value}
                            </a>
                          </CopyToClipboard>
                        )}
                        {item.items &&
                          item.items.map((subItem, subIndex) => (
                            <CopyToClipboard
                              mensaje="Copiado"
                              elementToCopy={subItem.copyValue || subItem.value}
                              key={subIndex}
                            >
                              <a
                                href={subItem.href || "#"}
                                className={`block text-gray-600 hover:text-amarillo ${
                                  subItem.href
                                    ? "hover:underline"
                                    : "cursor-pointer"
                                }`}
                              >
                                {subItem.value}
                              </a>
                            </CopyToClipboard>
                          ))}
                        {item.mapLink && (
                          <Link
                            href={item.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-green-600 hover:text-amarillo hover:underline block mt-1"
                          >
                            Ver en Google Maps
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    O contáctenos vía WhatsApp:
                  </h3>
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white w-full md:w-auto"
                  >
                    <Link
                      href="https://wa.me/+51979949008" // Reemplaza con tu número
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-x-2"
                    >
                      <FaWhatsapp className="h-6 w-6" />
                      <span>Chatear Ahora</span>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Columna del Mapa */}
              <div className="lg:col-span-2 bg-gray-200 rounded-xl shadow-xl overflow-hidden min-h-[350px] md:min-h-[500px] h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d495.244938815233!2d-79.83892338131842!3d-6.774782824220799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1747271796345!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Arbulú & Terry SAC en Chiclayo"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
