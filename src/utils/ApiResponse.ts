
export const ApiResponse = (
   success: boolean,
   message: string,
   statusCode: number
) => {
   return { success, message, statusCode }
}

