
import Button from "../Button/Button"
import Image from "next/image"

export default function WhoIAm() {
   return (
      <section className="mb-5  w-[90%] py-6 grid grid-cols-1 md:grid-cols-2 m-auto justify-center items-center">
         <div className="left flex flex-col items-start gap-8 md:gap-12">
            <p style={{ color: 'var(--primaryColor' }} className="font-bold  text-5xl md:text-7xl">Who I Am?</p>
            <p style={{ color: 'var(--textColor' }} className="font-medium text-xl md:text-3xl" >As a Bachelor of Computer Application student, I am passionate about coding and sharing my knowledge on social media. In addition to my coding skills, I excel in designing aesthetically pleasing websites and helping businesses achieve new heights through effective communication and interpersonal skill.</p>
            <Button innerText="Contact" href="/contact" target="_self" />
         </div>
         <div className="right flex md:justify-end sm:justify-center">
            <Image
               src="/Avatar.png"
               alt="Avatar Image"
               className="w-[350px] h-[350px] sm:w-[300px] sm:h-[300px]"
               width={350}
               height={350}
            />
         </div>
      </section>
   )
}
