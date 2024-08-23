
import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import clsx from "clsx";
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
}>) {

   return (
      <html lang="en" style={{ fontSize: "62.5%" }}>
         <link rel="shortcut icon" href="/Avatar.png" type="image/x-icon" />
         <body className={clsx(inter.className, 'bg-dot-white/[0.2]','bg-dot-black/[0.2] bg-[var(--backgroundColor)]  text-full')}>
            <div className={`w-full flex gap-20 flex-col `}>
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
