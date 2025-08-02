import type { ReactElement } from "react"

type ButtonProps = {
  variant: "primary" | "secondary",
  size: "sm" | "md" | "lg",
  text: string,
  startIcon?: ReactElement,
  endIcon?: ReactElement,
  onClick?: () => void
}

const variantStyles = {
  "primary": "bg-slate-300 text-slate-800 p-4 rounded-xl",
  "secondary": "bg-purple-800 text-slate-950 text-white font-semibold p-4 rounded-xl"
}
const sizeStyles = {
  "sm": "p-2 py-3",
  "md": "py-3 px-4",
  "lg": "px-4 py-4"
}

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button className={`flex ${variantStyles[props.variant]} cursor-pointer m-2 ${sizeStyles[props.size]}`}  >
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
        {props.text}
        {props.endIcon ? <div className="pl-1">{props.endIcon}</div>: null}
      </button>
    </>
  )
}