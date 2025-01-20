
export const DownloadButton = () => {

   const handleDownload = () => {
      const pathURL =
         "https://drive.google.com/file/d/16Y6iFyPA-_j7AwuEUfPdX4ITJiRIsVst/view?usp=drive_link"
      const elementCreation = document.createElement("a")
      elementCreation.href = pathURL
      document.body.appendChild(elementCreation)
      elementCreation.click()
      document.body.removeChild(elementCreation)
   }

   return (
     <>
         <button onClick={handleDownload}  className="rounded-md w-[150px] h-[35px] flex items-center justify-center text-lg font-semibold text-white bg-[var(--accentColor)] shadow-[var(--boxShadow)] transition transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[var(--highlightColor)]">
         Download Resume
       </button>
     </>
   );
}