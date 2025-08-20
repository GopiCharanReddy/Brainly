import { useEffect, useRef, useState, type ChangeEvent } from "react"
import CrossIcon from "../icons/CrossIcon"
import { Button } from "./Button"
import { useForm, type SubmitHandler } from "react-hook-form"
import Input from "./Input"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

type ModalType = {
  open: boolean,
  onClose: () => void,
}

const CreateContentModal = ({ open, onClose }: ModalType) => {

  const options = [
    { value: 'Twitter', label: 'Twitter' },
    { value: 'Youtube', label: 'Youtube' },
    { value: 'Documents', label: 'Documents' },
    { value: 'Links', label: 'Links' },
    { value: 'Tags', label: 'Tags' }
  ]
  const queryClient = useQueryClient()
  const [selectedType, setSelectedType] = useState('')
  const { register, handleSubmit, formState: { errors }, reset} = useForm<InputProps>()
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (input: InputProps) => {
      return axios.post(`${import.meta.env.VITE_BASE_URL}/content`, input,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`
          }
        })
    },
    onSuccess: (data) => {
      console.log("Content added successfully.")
      onClose()
      queryClient.invalidateQueries({ queryKey: ['content'] })
      setSelectedType('')
      reset()
    },
    onError: (error) => {
      console.log(error.message)
    }
  })
  const handleType = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value)
  }
  const onSubmit: SubmitHandler<InputProps> = (data) => {
    mutate(data)

  }
  const modalRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [open, onClose])
  return (
    open && <div className="flex justify-center w-screen h-screen bg-black/50 fixed top-0 left-0 backdrop-blur-sm">
      <div className="flex flex-col justify-center">
        <span ref={modalRef} className="bg-white p-8 rounded">
          <div className="flex justify-end">
            <div onClick={onClose}>
              <CrossIcon />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("title", { required: "Title is required." })} autoFocus placeholder={"Title"} />
            {errors.title && <div className="text-sm text-red-500  mt-1">Title is required.</div>}
            <Input {...register("link", { required: "Link is required." })} placeholder={"Link"} />
            {errors.link && <div className="text-sm text-red-500  mt-1">Link is required.</div>}
            <select {...register("type", { required: "Type is required." })} value={selectedType} onChange={handleType} className="p-1 border border-slate-400 mt-2 mb-2 w-full rounded-lg">
              <option value="">Choose an option</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.type && <div className="text-sm text-red-500 mb-1">Type field is required.</div>}
            {isError && <p className="text-sm text-red-500 mb-1">Failed to add Content. Try again</p>}
            <Button type="submit" fullWidth variant="secondary" text={isPending ? 'Submitting...' : 'Submit'} size="sm" />
          </form>
        </span>
      </div>
    </div>
  )
}
type InputProps = {
  title: string,
  link: string,
  type: string,
}

export default CreateContentModal