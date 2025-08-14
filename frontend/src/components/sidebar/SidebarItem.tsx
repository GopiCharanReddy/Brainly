import type { ReactElement } from "react";

const SidebarItem = ({ text, icon }: {
  text: string;
  icon: ReactElement
}) => {
  return (
    <div className="flex px-6 p-4 m-2 gap-x-2 items-center text-2xl cursor-pointer hover:bg-slate-200 transition-all duration-100">
      {icon} {text}
    </div>
  )
}

export default SidebarItem