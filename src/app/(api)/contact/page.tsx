
import { Metadata } from 'next'
import React from 'react'
import Contact from './contact'

export const metadata: Metadata = {
   title: 'developer.mohit | Contact',
   description: 'Contact'
}


function page() {
   return <Contact />
}

export default page