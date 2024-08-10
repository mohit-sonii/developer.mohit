import dbConnect from "@/lib/dbConnect";
import Contact from "@/model/ContactFormModel";
import { ApiResponse } from "@/utils/ApiResponse";

export async function POST(request: Request) {
   await dbConnect()
   try {
      const { form } = await request.json()
      for (const i in form) {
         if (i.trim().length === 0) {
            return ApiResponse(false, 'Fields cannot left empty', 400)
         }
      }
      const saveData = new Contact({
         name: form.name,
         email: form.email,
         contact: form.contact,
         serviceType: form.serviceType
      })
      await saveData.save()
      return ApiResponse(true, 'Thank you for the Submission, we will contact you soon!!!', 200)

   } catch (error) {
      console.error('Error Submitting form')
      return ApiResponse(false, 'Error Submitting Form', 500)
   }
}