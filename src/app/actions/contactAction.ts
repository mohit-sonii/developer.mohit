'use server'
import prisma from "@/lib/db"
import { ApiResponse } from "@/utils/ApiResponse"
import { contactFormSchema } from "@/schema/contactFormSchema"

export async function contactForm(formData: FormData) {

   const email = formData.get('email') as string
   const name = formData.get('sender') as string
   const contact = formData.get('contact') as string
   const serviceType = formData.get('serviceType') as string

   const formObject = {
      name: name,
      email: email,
      contact: contact,
      servicetype: serviceType
   }

   const validation = contactFormSchema.safeParse(formObject)
   if (!validation.success) return ApiResponse(false, validation.error.message, 400)

   try {
      const alreadySubmitted = await prisma.contactform.findFirst({
         where: {
            OR: [
               { email: email },
               { name: name }
            ]
         },
         select: {
            email: true,
            name: true
         }
      })

      if (alreadySubmitted) return ApiResponse(false, 'User already Submitted the Form', 400)

      await prisma.contactform.create({
         data: {
            name: name,
            email: email,
            contact: contact,
            servicetype: serviceType
         }
      })
      return ApiResponse(true, 'Thank you for the Submission, we will contact you soon!!!', 200)

   } catch (error: any) {
      console.error('Error Submitting form', error)
      return ApiResponse(false, 'Error Submitting Form', 500)
   }
}