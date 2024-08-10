import { NextResponse } from "next/server"


type ResponseType = {
   success: boolean,
   message: string,
   status: number
}


export const ApiResponse = (
   success: boolean,
   message: string,
   status: number
) => {
   const response: ResponseType = { success, message, status }
   return NextResponse.json({...response})
}

