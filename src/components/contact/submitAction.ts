"use server";
import axios from 'axios'

type formDataType = {
  name: string;
  email: string;
  contactNumber: string;
  service: string;
};

export async function submission(formData: formDataType) {
  try {
    const updatedData = {
      name: formData.name,
      contactNumber: parseInt(formData.contactNumber, 10),
      service: formData.service,
      email: formData.email
    }
    await axios.post(`${process.env.BACKEND_URL}/contact`, updatedData)
    return { success: true, message: "Thank you for your submission !!!" };

  } catch (error: any) {
    if (error.response && error.response.status === 403) {
      return {
        success: false,
        message: "User with these Credentials already submitted the form !!!",
      };
    } else {
      return {
        success: false,
        message: error.message || "Something went wrong !!!",
      };
    }
  }
}
