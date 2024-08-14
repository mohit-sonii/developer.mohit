
import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'

const infos = [
   {
      image: '/Postgres.svg',
      name: 'Postgres SQL'
   },
   {
      image: '/nextjs.svg',
      name: 'Next.js'
   },
   {
      image: '/Bootstrap.svg',
      name: 'Bootstrap'
   },
   {
      image: '/express.svg',
      name: 'Express JS'
   },
   {
      image: '/figma.svg',
      name: 'Figma'
   },
   {
      image: '/git.svg',
      name: 'Git'
   },
   {
      image: '/java.svg',
      name: 'Java'
   },
   {
      image: '/js.svg',
      name: 'JavaScript'
   },
   {
      image: '/ts.svg',
      name: 'TypeScript'
   },
   {
      image: '/mongodb.svg',
      name: 'Mongo DB'
   },
   {
      image: '/postman.svg',
      name: 'Postman'
   },
   {
      image: '/prisma.svg',
      name: 'Prisma'
   },
   {
      image: '/react.svg',
      name: 'React JS'
   },
   {
      image: '/shadcn.svg',
      name: 'Shad CN'
   },
   {
      image: '/tailwind.svg',
      name: 'Tailwind CSS'
   }
];

const shuffledArray = [...infos];
(() => {
   for (let i = shuffledArray.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
   }
})()

function Skills() {
   return (
      <>
         <section className=' w-full flex-col py-10 sm:w-full m-auto flex justify-center items-center gap-8 md:gap-12'>
            <p style={{ color: 'var(--primaryColor' }} className='font-bold text-5xl md:text-7xl'>My Skills</p>
            <p style={{ color: 'var(--textColor)' }} className='text-center text-xl md:text-3xl font-medium w-[90%]'>"Success is the result of perfection, hard work, learning from failure, loyalty, and persistence." <strong> – Colin Powell </strong></p>
            <InfiniteMovingCards speed='normal' direction='right' items={infos} pauseOnHover={false} />
            <InfiniteMovingCards speed='normal' direction='left' items={shuffledArray} pauseOnHover={false} />
         </section>
      </>
   )
}

export default Skills