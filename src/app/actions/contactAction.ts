'use server'
import prisma from "@/lib/db"
import { ApiResponse } from "@/utils/ApiResponse"
import { contactFormSchema } from "@/schema/contactFormSchema"


interface formDataInterface {
   email: string,
   name: string,
   contact: number,
   serviceType: string
}

export async function contactForm(formData: formDataInterface) {
   const { name, email, contact, serviceType } = formData
   const validation = contactFormSchema.safeParse({ name, email, contact, serviceType })
   if (!validation.success) return ApiResponse(false, validation.error.message, 400)

   try {
      const alreadySubmitted = await prisma.contactform.findFirst({
         where: {
            OR: [
               { email },
               { name },
               { contact }
            ]
         },
         select: {
            email: true,
            name: true,
            contact: true
         }
      })

      if (alreadySubmitted) return ApiResponse(false, 'User already Submitted the Form', 400)

      await prisma.contactform.create({
         data: {
            name,
            email,
            contact,
            servicetype: serviceType
         }
      })
      return ApiResponse(true, 'Thank you for the Submission, we will contact you soon!!!', 200)

   } catch (error: any) {
      console.error('Error Submitting form', error)
      return ApiResponse(false, 'Error Submitting Form', 500)
   }
}