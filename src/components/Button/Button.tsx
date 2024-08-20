import Link from "next/link"
import "./Button.css"

interface ButtonProps {
   innerText: string,
   href?: string | '',
   target?: string | '',
   typeOfButton?: "submit" | "button",
}
function Button({ innerText, href, target, typeOfButton }: ButtonProps) {
   if (href) {
      return (

         <Link href={href} target={target}>
            <button className="button py-5 text-center min-w-52 text-2xl" type={typeOfButton}>
               <p>{innerText}</p>
            </button>
         </Link>
      )
   }
   
   return (
      <button className="button py-5 text-center min-w-52 text-2xl" type={typeOfButton}>
         <p>{innerText}</p>
      </button>
   )

}
export default Button