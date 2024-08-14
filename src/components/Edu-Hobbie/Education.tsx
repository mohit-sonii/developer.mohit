

export default function Education() {
   return (
      <main className="mb-5  w-[90%] py-10 grid grid-cols-1 gap-10 md:grid-cols-2 m-auto justify-center">
         <section className="flex flex-col w-full items-start gap-8 md:gap-12 justify-start">
            <p style={{ color: 'var(--primaryColor' }} className="font-bold  text-5xl md:text-7xl">Education Status</p>
            <p style={{ color: 'var(--textColor)' }} className="font-medium text-xl md:text-3xl italic flex">Pursuing  Final Year of Bachelor of Computer Applications from CBLU Bhiwani, Haryana
            </p>
         </section>
         <section className="flex flex-col w-full  items-start md:items-end gap-8 md:gap-12 justify-normal">
            <p style={{ color: 'var(--primaryColor' }} className="font-bold  text-5xl md:text-7xl">Hobbies</p>
            <p style={{ color: 'var(--textColor' }} className="font-medium text-xl md:text-3xl italic" >Badminton, Chess, Listening to music</p>
         </section>
      </main>
   )
}
