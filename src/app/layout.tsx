
import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import ClientProvider from "./ClientProvider";
import { Toaster } from 'react-hot-toast';

const inter = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
   title: "developer.mohit",
   description: "Mohit Soni",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) 
{
   
   return (
      <html lang="en" style={{ fontSize: "62.5%" }}>
         <link rel="shortcut icon" href="/Avatar.png" type="image/x-icon" />
         <body className={inter.className} style={{ fontSize: "100%", backgroundColor: 'var(--backgroundColor)' }}>
            <div className="w-full flex gap-20 flex-col">
               <Toaster />
               <ClientProvider>
                  <NavBar />
                  {children}
                  <Footer />
               </ClientProvider>
            </div>
         </body>
      </html>
   );
}
