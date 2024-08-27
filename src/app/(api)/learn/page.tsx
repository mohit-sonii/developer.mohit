
import React from 'react'
import { Metadata } from 'next'
import ButtonForLearn from '@/components/Button/ButtonForLearn'
import { BackgroundBeams } from '@/components/ui/background-beams'

export const metadata: Metadata = {
   title: 'developer.mohit | Learn',
   description: 'Learn'
}

function page() {
   return (
      <main className='m-auto my-20 justify-center items-center flex w-[90%] gap-24 '>
         <section className=' w-[90%] flex m-auto justify-center items-center gap-7 text-center'>
            <h1 className="text-[var(--textColor)] text-4xl lg:text-8xl font-bold">What you be learning today ?</h1>
            <h5 className="w-full sm:w-[80%] m-auto justify-center items-center text-[var(--textColor)] text-xl lg:text-3xl font-normal">Maybe Programming Language, Maybe a database or maybe for interview. Well I didn&acute;t gave any yet, hahahhaha!!!</h5>
            <BackgroundBeams />
         </section>
         <section className=' w-[90%] flex m-auto justify-center items-center gap-8 text-center'>
            <ButtonForLearn innerText='HTML' image='/html.svg' path='/' />
            <ButtonForLearn innerText='CSS' image='/css.svg' path='/' />
            <ButtonForLearn innerText='JavaScript' image='/js.svg' path='/' />
            <ButtonForLearn innerText='ReactJS' image='/react.svg' path='/' />
            <ButtonForLearn innerText='ExpressJS' image='/express.svg' path='/' />
            <ButtonForLearn innerText='MongoDB' image='/mongodb.svg' path='/' />
            <ButtonForLearn innerText='PostgreSQL' image='/Postgres.svg' path='/' />
            <ButtonForLearn innerText='git' image='/git.svg' path='/' />
            <ButtonForLearn innerText='NextJS' image='/nextjs.svg' path='/' />
            <ButtonForLearn innerText='Prisma' image='/prisma.svg' path='/' />
         </section>
         <h1 className='font-bold italic text-3xl text-[var(--textColor)]'>&lt;  !!!  Pages are under Production. Thank you !!!  &gt;</h1>
      </main>
   )
}

export default page