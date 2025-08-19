import type { ReactElement } from "react";

const SidebarItem = ({ text, icon, onClick }: {
  text: string;
  icon: ReactElement;
  onClick: () => void
}) => {
  return (
    <div onClick={onClick} className="flex px-6 p-4 m-2 gap-x-2 items-center text-2xl cursor-pointer hover:bg-slate-200 transition-all duration-100">
      {icon} {text}
    </div>
  )
}

export default SidebarItem