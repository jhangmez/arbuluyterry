// fonts.ts
import localFont from 'next/font/local'

// Font-titulo (STIXTwoText)
export const fontTitulo = localFont({
  src: [
    {
      path: '../../public/fonts/STIXTwoText-VariableFont_wght.ttf',
      weight: '400 700', //  Ajusta el rango si es necesario, según la fuente variable.
      style: 'normal'
    },
    {
      path: '../../public/fonts/STIXTwoText-Italic-VariableFont_wght.ttf',
      weight: '400 700', // Ajusta el rango si es necesario, según la fuente variable.
      style: 'italic'
    }
  ],
  variable: '--font-titulo',
  display: 'swap'
})

// Font-cuerpo (Outfit)
export const fontCuerpo = localFont({
  src: [
    {
      path: '../../public/fonts/Outfit-VariableFont_wght.ttf',
      weight: '100 900', // Outfit es una fuente variable, cubre todo el rango.
      style: 'normal'
    }
  ],
  variable: '--font-cuerpo',
  display: 'swap'
})