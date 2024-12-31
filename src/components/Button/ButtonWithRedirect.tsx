import Link from "next/link"

interface ButtonProps {
   innerText: string,
   href: string,
   target?:string
}
function ButtonWithRedirect({ innerText, href,target="_blank" }: ButtonProps) {
      return (
         <Link href={href} target={target}>
            <button className=" rounded-md font-semibold bg-[var(--accentColor)] text-[var(--backgroundColor)] text-center w-[150px] h-[35px] text-lg transition transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[var(--highlightColor)]" type="button">
               <p>{innerText}</p>
            </button>
         </Link>
      ) 

}
export default ButtonWithRedirect;