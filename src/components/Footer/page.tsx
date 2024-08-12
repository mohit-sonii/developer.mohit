
"use client"
import Button from "../Button/Button"
import Image from "next/image"

function Footer() {
   return (
      <footer className=" w-full h-max grid gap-12 grid-cols-1 md:grid-cols-12 items-center">

         <div className="svg hidden  md:grid col-span-5 justify-end items-end overflow-hidden">
            <Image
               src='/footerDesign.svg'
               alt="Footer Design SVG"
               width={450}
               height={450}
               objectFit="contain"
               objectPosition="bottom right"
            />

         </div>
         <div className="aboutMeAndButtons col-span-7 ">
            <div className="flex flex-col p-5 gap-10 m-auto justify-center content-center">
               <div className="headings-subheadings font-bold flex flex-col gap-5" >
                  <p style={{ color: 'var(--primaryColor)' }} className=" text-4xl md:text-5xl">Mohit Soni</p>
                  <p style={{ color: 'var(--textColor' }} className="text-xl md:text-2xl">A Full Stack Web Developer and Web Designer</p>
               </div>
               <div className="buttons grid  grid-cols-2 gap-5  w-[70%]">
                  <Button innerText="Instagram" href="https://instagram.com/developer.mohit" target="_blank" />
                  <Button innerText="GitHub" href="https://github.com/mohit-sonii" target="_blank" />
                  <Button innerText="LinkedIn" href="https://www.linkedin.com/in/mohit-soni-808984265/" target="_blank" />
                  <Button innerText="Bento" href="https://bento.me/mohit-sonii" target="_blank" />
               </div>
            </div>
         </div>

      </footer>
   )
}

export default Footer