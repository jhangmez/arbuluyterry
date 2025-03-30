// components/CtaSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import CopyToClipboard from "../CopyToClipboard";

const CtaSection = () => {
  return (
    <section className="bg-primary py-16 md:py-24 font-play">
      <div className="container mx-auto px-4 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Contáctenos
            </h2>
            <p className="text-lg md:text-xl mt-4">
              Agenda directamente una consulta con Arbulú & Terry.
            </p>
          </div>

          {/* CTA Button & Contact Info */}
          <div className="text-center md:text-left">
            {/* WhatsApp Button */}
            <div>
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white w-full md:w-auto"
              >
                <Link
                  href="https://wa.me/+51979949008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-x-2"
                >
                  <FaWhatsapp className="h-6 w-6" />
                  <span>Contactar por WhatsApp</span>
                </Link>
              </Button>
            </div>

            <div className="mt-8">
              <p className="text-lg">
                <strong>Teléfono:</strong>{" "}
                <CopyToClipboard
                  mensaje="Teléfono copiado"
                  elementToCopy="074452282"
                >
                  074-452282
                </CopyToClipboard>
              </p>
              <p className="text-lg">
                <strong>Celular:</strong>{" "}
                <CopyToClipboard
                  mensaje="Celular copiado"
                  elementToCopy="979955944"
                >
                  979955944
                </CopyToClipboard>
                ,{" "}
                <CopyToClipboard
                  mensaje="Celular copiado"
                  elementToCopy="979949008"
                >
                  979949008
                </CopyToClipboard>
              </p>
              <p className="text-lg">
                <strong>Email:</strong>{" "}
                <CopyToClipboard mensaje="Email copiado">
                  <a href="mailto:eprach@yahoo.com" className="hover:underline">
                    eprach@yahoo.com
                  </a>
                </CopyToClipboard>
                ,{" "}
                <CopyToClipboard mensaje="Email copiado">
                  <a
                    href="mailto:mterryra@hotmail.com"
                    className="hover:underline"
                  >
                    mterryra@hotmail.com
                  </a>
                </CopyToClipboard>
              </p>
              <p className="text-lg">
                <strong>Dirección:</strong>{" "}
                <CopyToClipboard mensaje="Dirección copiada">
                  Jr. Tacna 575 Chiclayo, Lambayeque, Perú.
                </CopyToClipboard>
              </p>
              <p className="pt-2">
                <Link
                  className="text-lg hover:underline text-amarillo"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://maps.app.goo.gl/WSBNaxMRRzGTzK2v7"
                >
                  Ver en mapa
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
