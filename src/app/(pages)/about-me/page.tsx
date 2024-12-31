import CurrentlyLearning from "@/components/about-me/CurrentlyLearning";
import Education from "@/components/about-me/Education";
import Hero from "@/components/about-me/Hero";
import Skills from "@/components/about-me/Skills";
import WhoIAm from "@/components/about-me/WhoIAm";


function page() {
  return (
    <>
      <Hero />
      <WhoIAm />
      <CurrentlyLearning />
      <Skills />
      <Education />
    </>
  );
}

export default page;
