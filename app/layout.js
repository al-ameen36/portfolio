import './globals.scss'
import { Bebas_Neue, Montserrat, Dosis } from 'next/font/google'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const montserrat = Montserrat({ subsets: ['latin'] })
const dosis = Dosis({ subsets: ['latin'] })

export const metadata = {
  title: 'Muhammad Al-Ameen\'s portfolio',
  description: 'About Muhammad Al-Ameen Abdullahi professionally',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
