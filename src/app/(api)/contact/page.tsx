
import { Metadata } from 'next'
import React from 'react'
import Contact from './Contact'

export const metadata: Metadata = {
   title: 'developer.mohit | Contact',
   description: 'Contact Us'
}


function page() {
   return (
      <main className="my-6 w-[90%] min-h-max flex  m-auto gap-20 items-center">
         <section className="flex flex-col py-10 gap-14   content-center">
            <div className="headings-subheadings font-bold flex  flex-col gap-8 md:gap-10" >
               <h1 style={{ color: 'var(--primaryColor)' }} className="text-8xl">Have a Project?</h1>
               <h3 style={{ color: 'var(--textColor)' }} className="text-4xl md:text-5xl md:w-3/5">Don&prime;t worry we can assist you with this. Just let us know</h3>
            </div>
            <Contact />
         </section>
         <section>
            <div className="headings-subheadings font-bold flex  flex-col gap-8 md:gap-10" >
               <h1 style={{ color: 'var(--primaryColor)' }} className="text-8xl">Want to Connect?</h1>
               <h2 style={{ color: 'var(--textColor)' }} className="text-4xl md:text-5xl md:w-3/5">Here are few platform, where you can connect with me.</h2>
            </div>
         </section>
      </main>
   )
}

export default page