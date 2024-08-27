
"use client"
import Image from "next/image"
import Link from "next/link"
import NavItem from "../NavItem"

function Icon({ source, alt, dest }: { source: string, alt: string, dest: string }) {
   return (
      <Link href={dest} target="_blank">
         <div className="rounded-full w-12 h-12 p-2 bg-gray-700 hover:-translate-y-1 hover:scale-150  transition-all ease-in duration-200 ">
            
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

function Footer() {
   return (
      <footer className=" bg-slate-900 w-full h-max flex gap-12 justify-center items-center">
         <main className="flex flex-col my-12 p-5 gap-10 m-auto justify-center content-center">
            <div className="headings-subheadings font-bold flex flex-col gap-5" >
               <p className="text-white text-5xl md:text-6xl">Mohit Soni</p>
            </div>
            <section className="flex gap-12 jusitfy-center items-center">
               <Icon dest="https://instagram.com/developer.mohit" source="/instagram.svg" alt="instagram icon" />
               <Icon dest="https://github.com/mohit-sonii" source="/github.svg" alt="Github icon" />
               <Icon dest="https://www.linkedin.com/in/mohit-soni-808984265/" source="/linkedin.svg" alt="Linkedin icon" />
               <Icon dest="https://bento.me/mohit-sonii" source="/bento.svg" alt="instagram icon" />
            </section>
            <nav className="flex gap-8 font-bold text-xl" style={{ color: 'var(--backgroundColor' }}>
               <NavItem dest="/contact" item="Contact" />
               <NavItem dest="/" item="About Me" />
               <NavItem dest="/learn" item="Learn" />
            </nav>
         </main> 
      </footer>
   )
}

export default Footer