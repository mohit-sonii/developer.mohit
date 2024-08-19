"use client"

import React, { useCallback } from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import Button from '@/components/Button/Button'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { contactFormSchema } from '@/schema/contactFormSchema'
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { contactForm } from '@/app/actions/contactAction'


function Contact() {
   console.log('rendering')
   const form = useForm<z.infer<typeof contactFormSchema>>({
      resolver: zodResolver(contactFormSchema),
      defaultValues: {
         name: '',
         email: '',
         contact: 0,
         serviceType: ''
      }
   })

   const { handleSubmit, formState: { errors } } = form

   const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
      if (Object.keys(errors).length > 0) {
         for (const key in errors) {
            if (errors.hasOwnProperty(key)) {
               const errorKey = key as keyof typeof errors;
               toast.error(errors[errorKey]?.message || "An error occurred");
            }
         }
         return
      }
      try {
         const response = await contactForm(data)
         if (!response.success) {
            toast.error(response.message || "An error occurred")
         } else {
            toast.success("Form submitted successfully!")
         }
      } catch (error: any) {
         toast.error("An error occurred while submitting the form")
      }

   }

   return (
      <main className="my-6 w-[90%] min-h-max flex  m-auto  items-center">
         <section className="flex flex-col py-10 gap-14   content-center">
            <div className="headings-subheadings font-bold flex  flex-col gap-8 md:gap-10" >
               <p style={{ color: 'var(--primaryColor)' }} className="text-8xl">Have a Project?</p>
               <p style={{ color: 'var(--textColor)' }} className="text-4xl md:text-5xl md:w-3/5">Don&prime;t worry we can assist you with this. Just let us know</p>
            </div>
            <div className="buttons flex  gap-5 md:gap-20 h-auto">
               <Form {...form} >
                  <form onSubmit={handleSubmit(onSubmit)} className="flex gap-10  flex-col">
                     <div className="items-start md:items-center flex-col sm:flex-row gap-10 md:gap-20 flex">
                        <FormField
                           control={form.control}
                           name="name"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Full Name</FormLabel>
                                 <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                 </FormControl>
                              </FormItem>
                           )}
                        />
                        <FormField
                           control={form.control}
                           name="email"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Email</FormLabel>
                                 <FormControl>
                                    <Input placeholder="johndoe@gmail.com" {...field} />
                                 </FormControl>
                              </FormItem>
                           )}
                        />
                        <FormField
                           control={form.control}
                           name="contact"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Contact</FormLabel>
                                 <FormControl>
                                    <Input type ="number" placeholder="+12 142 2145 745" {...field} />
                                 </FormControl>
                              </FormItem>
                           )}
                        />
                        <FormField
                           control={form.control}
                           name="serviceType"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Service</FormLabel>
                                 <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                 >
                                    <SelectTrigger className="w-[180px]">
                                       <SelectValue placeholder="Type of Service" />
                                    </SelectTrigger>
                                    <SelectContent >
                                       <SelectItem value="webdevelopment">Web Development</SelectItem>
                                       <SelectItem value="uiux">UI/UX</SelectItem>
                                       <SelectItem value="appdevelopment">App Development</SelectItem>
                                       <SelectItem value="seo">SEO</SelectItem>
                                    </SelectContent>
                                 </Select>
                              </FormItem>
                           )}
                        />
                     </div>
                     <Button innerText='Submit' href='' typeOfButton="submit" />
                  </form>
               </Form>
            </div>
         </section>
      </main>
   )
}

export default Contact