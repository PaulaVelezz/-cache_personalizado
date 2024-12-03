import Footer from "./components/Footer/Footer";
import "./globals.css";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";

const bebas = Bebas_Neue({ 
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
});

const grotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata = {
  title: "Cache personalizado",
  description: "Proyecto desarrollado con Next.js, React.js y Tailwind CSS, que muestra información a modo portafolio pero ofrece una experiencia personalizada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${bebas.variable} ${grotesk.variable}`}
      >
        <main> 
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}