"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavItem({ dest, item }: { dest: string, item: string }) {

   const currentRoute = usePathname()
   return (
      <Link href={dest} style={
         {
            color: currentRoute === dest ? 'var(--accentColor)' : 'var(--textColor)'
         }
      } >
         <p className=" relative before:content-[''] before:absolute before:left-0 before:bottom-[-5px] before:rounded-lg before:h-[2px] before:w-0 hover:before:w-full before:bg-slate-300 before:transition-all before:duration-200 before:ease-in-out">
            {item}
         </p>
      </Link>
   )
}