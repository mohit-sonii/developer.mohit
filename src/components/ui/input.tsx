import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
   extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ type, ...props }, ref) => {
      return (
         <input
            required
            type={type}
            className="rounded-md outline-none p-5 border-1 border-[var(--accentColor)] text-[var(--textColor)] focus:border-[var(--textColor)] font-medium bg-[var(--backgroundColor)] text-lg"
            ref={ref}
            {...props}
         />
      )
   }
)
Input.displayName = "Input"

export { Input }
