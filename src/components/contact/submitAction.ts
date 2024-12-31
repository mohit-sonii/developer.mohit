"use server";
import prisma from "@/lib/db";

type formDataType = {
  name: string;
  email: string;
  contact: string;
  service: string;
};
export async function submission(formData: formDataType) {
  try {
    const isSubmitted = await prisma.contactform.findFirst({
      where: {
        OR: [{ email: formData.email }, { contact: formData.contact }],
      },
    });
    if (isSubmitted) {
      return {
        success: false,
        message: "User with these Credentials already submitted the form !!!",
      };
    }
    await prisma.contactform.create({
      data: {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        service: formData.service,
      },
    });
    return { success: true, message: "Thank you for your submission !!!" };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong !!!",
    };
  }
}
