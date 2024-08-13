

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
         <p style={{ color: 'var(--textColor)' }} className='text-center text-xl sm:w-[70%] md:text-3xl font-medium'><strong>PostgresSQL</strong> is a powerful, open-source relational database management system known for its robustness, extensibility, and SQL compliance. PostgreSQL is highly scalable and can handle large datasets efficiently, making it popular for both small and large-scale applications. It also supports concurrency control, complex queries, and data integrity checks, ensuring reliable performance. With its active community, PostgreSQL continuously evolves, providing a reliable choice for modern database needs</p>

         <TooltipProvider>
            <Tooltip>
               <TooltipTrigger asChild>
                  <Image
                     src="/Postgres.svg"
                     alt="Postgres SQL"
                     width={100}
                     height={100}
                  />
               </TooltipTrigger>
               <TooltipContent>
                  <p>Postgres SQL</p>
               </TooltipContent>
            </Tooltip>
         </TooltipProvider>

      </section>
   )
}

export default CurrentlyLearning