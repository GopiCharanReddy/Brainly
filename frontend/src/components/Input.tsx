import type { ChangeEvent } from "react";

type InputProps = {
  placeholder: string;
  type?: string
  autoFocus?: boolean
  ref?: any
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void 
}

const Input = (props: InputProps) => {
  return (
    <>
      <div>
          <input onChange={props.onChange} type={props.type ?? "string"} autoFocus={props.autoFocus} className='border-1 border-slate-500 p-2 rounded-lg w-max m-2' placeholder={props.placeholder} />
      </div>
    </>
  )
}

export default Input