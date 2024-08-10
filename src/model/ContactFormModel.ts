
import mongoose, { Schema, Document } from "mongoose";

interface contactForm extends Document {
   name: string,
   email: string,
   contact: number
   serviceType: string
}

const ContactFormSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      unique: true,
      required: true,
      type: String
   },
   contact: {
      type: Number,
      required: true,
      unique: true
   },
   serviceType: {
      type: String,
      required: true
   }
})

const Contact = mongoose.models.Contact as mongoose.Model<contactForm> || mongoose.model<contactForm>('Contact', ContactFormSchema)

export default Contact