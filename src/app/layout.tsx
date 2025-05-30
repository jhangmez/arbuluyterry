import "./globals.css";
import { fontPlay } from "./fonts";
const description = "Construyendo el futuro";
const title = `Arbulú & Terry S.A.C. | ${description}`;
const imageUrl = `https://vrf137hlqv.ufs.sh/f/YfEXHleiA93z2N9Ftq40dbcg8iQq41HFJRsnN6vomB9l7D3V`;
import { Toaster } from "@/components/ui/sonner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://arbuluyterry.com/",
    images: [{ url: imageUrl }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${fontPlay.variable} `}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Arbulú & Terry S.A.C." />

        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.ico"
          sizes="128x128"
        />
      </head>
      <body>
        <noscript>Página realizada por Jhan Gómez P. @jhangmez</noscript>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
