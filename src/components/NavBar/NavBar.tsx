"use client"
import React from "react"
import ThemeSwitcher from "../../../ThemeSwitcher"
import "./NavBar.css"
import { useState } from "react"
import Image from "next/image"
import NavItem from "../NavItem"

function NavBar() {

   const [isVisible, setIsVisible] = useState<boolean>(false)
   const handleClick = () => {
      setIsVisible(!isVisible)
   }

   return (
      <nav className="rounded-b-2xl z-[20] navigation-header m-auto p-8 flex justify-between items-center w-full text-xl font-bold mb-3 ">
         <div>
            <p>Developer Mohit</p>
         </div>
         <main className="flex gap-5 md:gap-7 relative items-center">
            <div className="hidden md:flex gap-3 md:gap-7">
               <NavItem dest="/contact" item="Contact"/>
               <NavItem dest="/" item="About Me" />
               <NavItem dest="/learn" item="Learn" />
            </div>
            <ThemeSwitcher />
            <section className="flex md:hidden">
               <button onClick={handleClick} >
                  {!isVisible && <Image
                     src="/Bars.svg"
                     alt="Bars Image"
                     width={15}
                     height={15}
                  />}
                  {isVisible && <Image
                     src="/cross.svg"
                     alt="Cross Image"
                     width={15}
                     height={15}
                  />}
               </button>
            </section>
            {isVisible && (
               <div className="mt-5 InvisibleNavBar flex w-max p-5 flex-col gap-7 absolute top-full right-0  rounded-lg py-8">
                  <NavItem dest="/contact" item="Contact" />
                  <NavItem dest="/" item="About Me" />
                  <NavItem dest="/learn" item="Learn" />
               </div>
            )}
         </main>
      </nav >
   )
}

export default NavBar