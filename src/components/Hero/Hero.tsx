
import React from "react"
import Button from "@/components/Button/Button"

export default function Hero() {

   return (
      <main className="my-6 w-[90%] min-h-max flex justify-center m-auto items-center">
         <section className="flex flex-col py-10 gap-14 m-auto justify-center content-center">
            <div className="headings-subheadings font-bold flex flex-col gap-8 md:gap-10" >
               <p style={{ color: 'var(--primaryColor)' }} className=" text-7xl md:text-9xl">Namaste, I am <span style={{ color: 'var(--accentColor)' }}>Mohit</span></p>
               <p style={{ color: 'var(--textColor)' }} className="text-4xl md:text-6xl md:w-3/5">A Full Stack Web Developer and Web Designer</p>
            </div>
            <div className="buttons flex gap-9 md:gap-20 h-auto">
               <Button innerText="Instagram" href="https://instagram.com/developer.mohit" target="_blank" />
               <Button innerText="GitHub" href="https://github.com/mohit-sonii" target="_blank" />
               <Button innerText="LinkedIn" href="https://www.linkedin.com/in/mohit-soni-808984265/" target="_blank" />
            </div>
         </section>
      </main>
   )
}

