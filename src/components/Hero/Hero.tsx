import React from "react"
import Button from "@/components/Button/Button"

export default function Hero() {
   return (
      <section className="md:h-[70vh] mt-5  w-full flex justify-center items-center">
         <div className="flex flex-col p-5 gap-14 w-[90%] m-auto justify-center content-center">
            <div className="headings-subheadings font-bold flex flex-col gap-8 md:gap-10" >
               <p style={{ color: 'var(--primaryColor)' }} className=" text-7xl md:text-9xl">Namaste, I am <span style={{ color: 'var(--accentColor' }}>Mohit</span></p>
               <p style={{ color: 'var(--textColor' }} className="text-4xl md:text-6xl md:w-3/5">A Full Stack Web Developer and Web Designer</p>
            </div>
            <div className="buttons flex gap-9 md:gap-20 h-auto">
               <Button innerText="Instagram" href="https://instagram.com/developer.mohit" />
               <Button innerText="GitHub" href="https://github.com/mohit-sonii" />
               <Button innerText="LinkedIn" href="https://www.linkedin.com/in/mohit-soni-808984265/" />
            </div>
         </div>
      </section>
   )
}

