
import Hero from '@/components/Hero/Hero'
import WhoIAm from '@/components/WhoIam/WhoIAm'
import CurrentlyLearning from '@/components/CurrentlyLearning/CurrentlyLearning'
import Skills from '@/components/Skills/Skills'

function page() {
   return (
      <>
         <Hero />
         <WhoIAm/>
         <CurrentlyLearning/>
         <Skills/>
      </>
   )
}

export default page