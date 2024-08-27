
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

interface ButtonForLearnProps {
   innerText: string,
   image: string,
   path: string,
}


function ButtonForLearn({ innerText, image, path }: ButtonForLearnProps) {
   
   return (
      <Link href={path} >
         <button
            className={`relative rounded-lg justify-center items-center flex gap-4 p-5 min-w-52 bg-[var(--textColor)]  cursor-pointer
            before:content-['']
            before:absolute
            before:bottom-0
            before:rounded-lg
            before:w-full
            before:h-0
            hover:before:h-full
            before:bg-[#8a82f8]
            before:transition-all
            before:duration-300
            before:ease-in-out
            `}
         >

            <Image
               src={image}
               alt={image}
               className='z-10'
               width={30}
               height={30}
            />
            <p className='z-10 text-2xl font-bold text-[var(--backgroundColor)]'>
               {innerText}
            </p>
         </button>
      </Link>
   )
}

export default ButtonForLearn