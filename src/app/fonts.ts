// fonts.ts
import localFont from 'next/font/local'

// Font Platypi (reemplaza fontTitulo y fontCuerpo)
export const fontPlay = localFont({
  src: [
    {
      path: '../../public/fonts/Platypi-VariableFont_wght.ttf',
      weight: '400 700', //  Ajusta si el rango es diferente
      style: 'normal'
    },
    {
      path: '../../public/fonts/Platypi-Italic-VariableFont_wght.ttf',
      weight: '400 700', // Ajusta si el rango es diferente
      style: 'italic'
    }
  ],
  variable: '--font-play',  // Cambiado a --font-play
  display: 'swap',
  preload: true, // buena practica para mejor performance
})