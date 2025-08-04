import CrossIcon from "../icons/CrossIcon"

const CreateComponentModal = ({open, onClose}) => {
  return (
    <div>
      {open && <div className="flex justify-center w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60">
        <div className="flex flex-col justify-center">
          <div className="flex bg-white p-4 rounded">
            <CrossIcon />
          </div>
        </div>
      </div> }
    </div>
  )
}

export default CreateComponentModal