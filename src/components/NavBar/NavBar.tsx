
import React from "react"
import Link from "next/link"
import ThemeSwitcher from "../../../ThemeSwitcher"
import "./NavBar.css"



function NavBar() {

   return (
      <nav className="rounded-b-2xl  m-auto p-8 flex justify-between items-center w-[90%] text-xl font-bold mb-3">
         <div>
            <p>Developer Mohit</p>
         </div>
         <div className="flex gap-3 md:gap-7">
            <ThemeSwitcher />
            <Link href={'/contact'}>
               <li >
                  Contact
               </li>
            </Link>
            <Link href={'/about-me'}>
               <li>
                  About Me
               </li>
            </Link>
         </div>
      </nav>
   )
}

export default NavBar