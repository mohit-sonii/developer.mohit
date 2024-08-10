import type { Metadata } from "next";
import Footer from "@/components/Footer/page";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "developer.mohit",
   description: "Mohit Soni Description",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" style={{ fontSize: "62.5%" }}>
         <link rel="shortcut icon" href="/Avatar.png" type="image/x-icon" />
         <body className={inter.className} style={{ fontSize: "100%" ,backgroundColor:'var(--backgroundColor)'}}>
            {children}
            <Footer />
         </body>
      </html>
   );
}
