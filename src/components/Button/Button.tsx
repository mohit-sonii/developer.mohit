import Link from "next/link"

import "../../app/globals.css"



function Button({ innerText, href }: { innerText: string, href: string }) {

   return (
      <Link href={href}>
         <button style={{backgroundColor:"var(--accentColor)"}}>
            {innerText}
         </button>
      </Link>
   )
}
export default Button