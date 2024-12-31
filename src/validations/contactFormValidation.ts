
import { z } from 'zod'

export const contactformValidations = z.object({
   name: z.string().min(2, { message: 'Name should be atleast 2 character' }).max(40, { message: 'Name should not more than 40 characters' }),
   email: z.string().email({ message: 'Email is invalid' }),
   contact: z.string().min(10,{message:"Contact number must be atleast 10 digits"}),
   service: z.string().min(2,{message:"Select an option"})
})