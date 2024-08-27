"use client"

import React, { useState, useEffect } from 'react'
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

export const Contact: React.FC = () => {
   const [loading, setLoading] = useState<boolean>(false)
   const form = useForm<z.infer<typeof contactFormSchema>>({
      resolver: zodResolver(contactFormSchema),
      defaultValues: {
         name: '',
         email: '',
         contact: undefined,
         serviceType: ''
      },
      mode: 'onSubmit'
   })

   const { handleSubmit, reset, formState: { errors } } = form

   const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
      setLoading(true)
      try {
         const response = await contactForm(data)
         if (!response.success) {
            toast.error(response.message || "An error occurred")
         } else {
            toast.success("Thanks for the Submission!")
         }
         reset()
      } catch (error: any) {
         toast.error("An error occurred while submitting the form")
      } finally {
         setLoading(false)
      }
   }
   useEffect(() => {
      if (Object.keys(errors).length > 0) {
         for (const key in errors) {
            if (errors.hasOwnProperty(key)) {
               const errorKey = key as keyof typeof errors;
               toast.error(errors[errorKey]?.message || "An error occurred");
            }
         }
      }
   }, [errors])

   return (
      <div className="buttons flex gap-5 md:gap-20 h-auto">
         <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-10 flex-col">
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
                              <Input
                                 type="number"
                                 placeholder="+12 142 2145 745"
                                 {...field}
                                 maxLength={15}
                                 value={field.value ?? ''}
                                 onChange={(e) =>
                                    field.onChange(e.target.value === '' ? '' : parseInt(e.target.value))
                                 }
                              />
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
                              <SelectTrigger className="w-[200px]">
                                 <SelectValue placeholder="Type of Service" />
                              </SelectTrigger>
                              <SelectContent>
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
               <Button innerText={loading ? 'Loading...' : 'Submit'} typeOfButton="submit" />
            </form>
         </Form>
      </div>
   )
}
