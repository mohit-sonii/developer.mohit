import Link from "next/link"
import "./Button.css"

function Button({ innerText, href,target }: { innerText: string, href: string,target:string }) {

   return (
      <Link href={href} target={target}>
         <button className="button py-5 text-center min-w-52 text-2xl">
           <p>{innerText}</p>
         </button>
      </Link>
   )
}
export default Button