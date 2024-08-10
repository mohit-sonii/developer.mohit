
import { z } from 'zod'

export const contactFormSchema = z.object({
   name: z.string().min(2, { message: 'Name should be atleast 2 character' }).max(20, { message: 'Name should not more than 20 characters' }),
   email: z.string().email({ message: 'Email is invalid' }),
   contact: z.number(),
   serviceType: z.string()
})