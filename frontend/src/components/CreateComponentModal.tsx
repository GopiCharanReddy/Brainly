import { useEffect, useRef } from "react"
import CrossIcon from "../icons/CrossIcon"
import { Button } from "./Button"

type ModalType = {
  open: boolean,
  onClose: () => void,
}

const CreateComponentModal = ({open, onClose}: ModalType) => {
  const modalRef = useRef<HTMLDivElement>(null)
  useEffect(()=> {
    const handleOutsideClick = (e: MouseEvent) => {
      if(modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  },[open, onClose])
  return (
      open && <div className="flex justify-center w-screen h-screen bg-black/50 fixed top-0 left-0 backdrop-blur-sm">
        <div className="flex flex-col justify-center">
          <span ref={modalRef} className="bg-white p-8 rounded">
            <div className="flex justify-end">
              <div onClick={onClose}>
            <CrossIcon />
              </div>
            </div>
            <div>
              <Input autoFocus placeholder={"Title"} />
              <Input placeholder={"Link"} />
              <Button variant="secondary" text="Submit" size="md" />
            </div>
          </span>
        </div>
      </div>
  )
}
type InputProps = {
  placeholder: string,
  autoFocus?: boolean
}
const Input = (props: InputProps) => {
  return(
    <div>
      <input type="text" placeholder={props.placeholder} autoFocus={props.autoFocus} className="px-4 py-2 border rounded m-2" />
    </div>
  )
}
export default CreateComponentModal