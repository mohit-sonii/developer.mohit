import Link from "next/link"
import "./Button.css"

function Button({ innerText, href }: { innerText: string, href: string }) {

   return (
      <Link href={href} target="_blank">
         <button className="py-5 text-center min-w-52 text-2xl">
           <span>{innerText}</span>
         </button>
      </Link>
   )
}
export default Button