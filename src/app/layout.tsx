import "./globals.css";
import { fontTitulo, fontCuerpo } from "./fonts";
const description = "Construyendo el futuro";
const title = `Arbulú & Terry S.A.C. | ${description}`;
const imageUrl = `https://vrf137hlqv.ufs.sh/f/YfEXHleiA93z2N9Ftq40dbcg8iQq41HFJRsnN6vomB9l7D3V`;

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
      className={`${fontTitulo.variable} ${fontCuerpo.variable}`}
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
      </body>
    </html>
  );
}
