import { NextResponse } from "next/server"


type ResponseType = {
   success: boolean,
   message: string,
   statusCode: number
}


export const ApiResponse = (
   success: boolean,
   message: string,
   statusCode: number
) => {
   const response: ResponseType = { success, message, statusCode }
   return NextResponse.json({ ...response }, { status: statusCode })
}

