
"use client"
import Image from "next/image"
import Button from "../Button/Button"
import Link from "next/link"

function Icon({ source, alt, dest }: { source: string, alt: string, dest: string }) {
   return (
      <Link href={dest} target="_blank">
         <div className="rounded-full w-12 h-12 p-2 bg-gray-700">
            <Image
               src={source}
               alt={alt}
               className="rounded-full"
               width={60}
               height={60}
            />
         </div>
      </Link>
   )
}
function NavItem({ dest, item }: { dest: string, item: string }) {
   return (
      <Link href={dest}>
         <li className=" relative hover:translate-x-1 before:content-[''] before:absolute before:left-0 before:bottom-[-5px] before:rounded-lg before:h-[2px] before:w-0 hover:before:w-full before:bg-white before:transition-all before:duration-200 before:ease-in-out">
            {item}
         </li>
      </Link>
   )
}

function Footer() {
   return (
      <footer className=" bg-slate-900 w-full h-max flex gap-12 justify-center items-center">
         <div className="flex flex-col my-12 p-5 gap-10 m-auto justify-center content-center">
            <div className="headings-subheadings font-bold flex flex-col gap-5" >
               <p className="text-white text-5xl md:text-6xl">Mohit Soni</p>
            </div>
            <div className="flex gap-12 jusitfy-center items-center">
               <Icon dest="https://instagram.com/developer.mohit" source="/instagram.svg" alt="instagram icon" />
               <Icon dest="https://github.com/mohit-sonii" source="/github.svg" alt="Github icon" />
               <Icon dest="https://www.linkedin.com/in/mohit-soni-808984265/" source="/linkedin.svg" alt="Linkedin icon" />
               <Icon dest="https://bento.me/mohit-sonii" source="/bento.svg" alt="instagram icon" />
            </div>
            <nav className="flex gap-8 font-bold text-xl" style={{ color: 'var(--backgroundColor' }}>
               <NavItem dest="/contact" item="Contact" />
               <NavItem dest="/" item="About Me" />
            </nav>
         </div>
      </footer>
   )
}

export default Footer