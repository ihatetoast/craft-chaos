import { Courgette, Libre_Baskerville} from "next/font/google";
import "./globals.css";

const courgette = Courgette({
  weight: "400",
  variable: "--font-courgette",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Craft Chaos',
  description: 'A personal gallery of knitting, crochet, embroidery, and craft projects with patterns, materials, and progress tracking.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${courgette.variable} ${libreBaskerville.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
