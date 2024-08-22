

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
         <p style={{ color: 'var(--primaryColor' }} className='font-bold text-5xl md:text-7xl'>Currently Learning</p>
         <article style={{ color: 'var(--textColor)' }} className='text-center text-xl sm:w-[70%] md:text-3xl font-medium'><strong>Amazon Web Services &#10088; AWS &#10089;</strong> is a comprehensive cloud computing platform provided by Amazon. It offers a wide range of services, including computing power, storage, databases, machine learning, and analytics, all accessible over the internet. AWS allows businesses to scale resources up or down based on demand, reducing the need for on-premises infrastructure. It's widely used for hosting applications, storing data, and running various workloads in a secure and reliable manner.</article>

         <TooltipProvider>
            <Tooltip>
               <TooltipTrigger asChild>
                  <Image
                     src="/aws.svg"
                     alt="Amaxon Web Service"
                     width={100}
                     height={100}
                  />
               </TooltipTrigger>
               <TooltipContent>
                  <p>Amazon Web Service (AWS)</p>
               </TooltipContent>
            </Tooltip>
         </TooltipProvider>

      </section>
   )
}

export default CurrentlyLearning