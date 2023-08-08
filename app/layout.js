import Link from "next/link";
import "./globals.scss";
import navStyles from "@/styles/nav.module.scss";
import { Montserrat, Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas-neue",
});
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Al-Ameen's portfolio",
  description: "About Muhammad Al-Ameen Abdullahi professionally",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className + " " + bebas.variable}>
        <nav className={navStyles.nav}>
          <div>
            <Link className={navStyles.nav_brand} href="/">
              M.A.A
            </Link>
          </div>
          <div>
            <input type="checkbox" name="darkmode" />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
