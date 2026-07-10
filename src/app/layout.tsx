import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const memorialFont = localFont({

  src: "../assets/fonts/MemorialFont.woff2",

  variable: "--font-memorial",

});


export const metadata: Metadata = {

  title: "Gabriel Ganley Memorial",

  description: "Um legado que permanece",

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="pt-BR">

      <body className={`${memorialFont.variable}`}>

        {children}

      </body>

    </html>

  );

}