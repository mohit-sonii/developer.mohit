
import Hero from '@/components/Hero/Hero'
import WhoIAm from '@/components/WhoIam/WhoIAm'
import CurrentlyLearning from '@/components/CurrentlyLearning/CurrentlyLearning'
import Skills from '@/components/Skills/Skills'
import Education from '@/components/Edu-Hobbie/Education'

function page() {
   return (
      <>
         <Hero />
         <WhoIAm />
         <CurrentlyLearning />
         <Skills />
         <Education />
      </>
   )
}

export default page