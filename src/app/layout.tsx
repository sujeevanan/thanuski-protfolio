import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thanushki Senarath — Interior Architecture",
  description:
    "Research-driven conceptual designer inspired by nature, culture, and tradition, blended with contemporary design.",
  keywords: [
    "interior architecture",
    "interior design",
    "3D visualization",
    "furniture design",
    "Limkokwing University",
    "portfolio",
  ],
  authors: [{ name: "Thanushki Senarath" }],
  openGraph: {
    title: "Thanushki Senarath — Interior Architecture",
    description:
      "Research-driven conceptual designer inspired by nature, culture, and tradition.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
