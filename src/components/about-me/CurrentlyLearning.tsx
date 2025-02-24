

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
         <article style={{ color: 'var(--textColor)' }} className='text-center text-xl sm:w-[70%] md:text-3xl font-medium'><strong>Spring Boot</strong> is a Java-based framework that simplifies the development of stand-alone, production-ready Spring applications. It eliminates boilerplate configuration, provides embedded servers (Tomcat, Jetty), and supports microservices architecture. Features include auto-configuration, Spring Boot Starter dependencies, and built-in monitoring via Actuator. It is widely used for building scalable, enterprise-grade web applications and APIs.</article>

         <TooltipProvider>
            <Tooltip>
               <TooltipTrigger asChild>
                  <Image
                     src="/spring.svg"
                     alt="Java Full Stack Development"
                     width={150}
                     height={150}
                  />
               </TooltipTrigger>
               <TooltipContent>
                  <p>Spring Boot</p>
               </TooltipContent>
            </Tooltip>
         </TooltipProvider>

      </section>
   )
}

export default CurrentlyLearning