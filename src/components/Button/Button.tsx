import Link from "next/link"
import "./Button.css"

function Button({ innerText, href }: { innerText: string, href: string }) {

   return (
      <Link href={href} target="_blank">
         <button style={{backgroundColor:"var(--accentColor)"}} className="py-5 text-center min-w-52 text-2xl">
            {innerText}
         </button>
      </Link>
   )
}
export default Button