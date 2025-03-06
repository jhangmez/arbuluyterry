import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Importa el componente Image de Next.js

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/+51979949008"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        className="fixed bottom-10 right-0 hover:bg-transparent select-none rounded-full"
        variant="ghost"
      >
        <Image
          src="/icons/Whatsapp.svg"
          alt="Contactar por WhatsApp"
          width={70}
          height={70}
        />
        <span className="sr-only">Contactar por WhatsApp</span>
      </Button>
    </Link>
  );
}
