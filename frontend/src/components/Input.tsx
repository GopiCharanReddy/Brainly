import { forwardRef, type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(({ type="text", ...rest }, ref) => {
  return (
      <div>
          <input {...rest} ref={ref} className='border-1 border-slate-500 p-2 rounded-lg w-max m-2' />
      </div>
  )
}
)

export default Input