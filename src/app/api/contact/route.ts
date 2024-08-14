import dbConnect from "@/lib/dbConnect";
import Contact from "@/model/ContactFormModel";
import { ApiResponse } from "@/utils/ApiResponse";

export async function POST(request: Request) {
   await dbConnect()
   try {
      const { name, email, contact, serviceType } = await request.json()
      const alreadySubmitted = await Contact.findOne({
         $or: [
            { name },
            { email },
            { contact }
         ]
      })
      
      if (alreadySubmitted) return ApiResponse(false, 'User already Submitted the Form', 400)

      const saveData = new Contact({
         name,
         email,
         contact,
         serviceType
      })
      await saveData.save()
      return ApiResponse(true, 'Thank you for the Submission, we will contact you soon!!!', 200)

   } catch (error) {
      console.error('Error Submitting form', error)
      return ApiResponse(false, 'Error Submitting Form', 500)
   }
}