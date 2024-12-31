

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip"


function CurrentlyLearning() {
   return (
      <section className='w-[90%]  flex-col py-10 sm:w-full m-auto flex justify-center items-center gap-8 md:gap-12'>
         <h1 style={{ color: 'var(--primaryColor' }} className='font-bold text-5xl md:text-7xl'>Currently Learning</h1>
         <article style={{ color: 'var(--textColor)' }} className='text-center text-xl sm:w-[70%] md:text-3xl font-medium'><strong>Python</strong> is a versatile, high-level programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. With an extensive standard library and numerous third-party packages, Python is widely used for web development, data analysis, machine learning, automation, and more. Its beginner-friendly syntax makes it an ideal choice for both new and experienced developers.</article>

         <TooltipProvider>
            <Tooltip>
               <TooltipTrigger asChild>
                  <Image
                     src="/python.svg"
                     alt="Python Full Stack Development"
                     width={100}
                     height={100}
                  />
               </TooltipTrigger>
               <TooltipContent>
                  <p>Python</p>
               </TooltipContent>
            </Tooltip>
         </TooltipProvider>

      </section>
   )
}

export default CurrentlyLearning