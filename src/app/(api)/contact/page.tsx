
import { Metadata } from 'next'
import React from 'react'
import Contact from './contact'

export const metadata: Metadata = {
   title: 'developer.mohit | Contact',
   description: 'Contact'
}


function page() {
   return (
      <main className="my-6 w-[90%] min-h-max flex  m-auto gap-20 items-center">
         <section className="flex flex-col py-10 gap-14   content-center">
            <div className="headings-subheadings font-bold flex  flex-col gap-8 md:gap-10" >
               <p style={{ color: 'var(--primaryColor)' }} className="text-8xl">Have a Project?</p>
               <p style={{ color: 'var(--textColor)' }} className="text-4xl md:text-5xl md:w-3/5">Don&prime;t worry we can assist you with this. Just let us know</p>
            </div>
            <Contact />
         </section>
         <section>
            <div className="headings-subheadings font-bold flex  flex-col gap-8 md:gap-10" >
               <p style={{ color: 'var(--primaryColor)' }} className="text-8xl">Want to Connect?</p>
               <p style={{ color: 'var(--textColor)' }} className="text-4xl md:text-5xl md:w-3/5">Here are few platform, where you can connect with me.</p>
            </div>
         </section>
      </main>
   )
}

export default page