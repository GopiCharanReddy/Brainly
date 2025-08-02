import { BrainIcon } from "../../icons/BrainIcon"

const Sidebar = () => {
  return (
    <div className="flex justify-start bg-white shadow-xl w-70 h-screen items-start">
      <div className="font-semibold flex text-xl items-center p-4">
        <BrainIcon />
        Second Brain
      </div>
    </div>
  )
}

export default Sidebar