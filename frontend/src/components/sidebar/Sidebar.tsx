import BrainIcon from "../../icons/BrainIcon"
import HashtagIcon from "../../icons/HashtagIcon"
import LinkIcon from "../../icons/LinkIcon"
import TextFileIcon from "../../icons/TextFileIcon"
import TwitterIcon from "../../icons/TwitterIcon"
import YoutubeIcon from "../../YoutubeIcon"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  return (
    <div className="justify-start bg-white shadow-xl w-72 items-start fixed h-screen min-h-screen">
      <div className="flex text-2xl font-semibold m-2 cursor-pointer items-center">
        {<BrainIcon />} Second Brain
      </div>
      <div>
        <SidebarItem text="Twitter" icon={<TwitterIcon size="lg" />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon size="lg" />} />
        <SidebarItem text="Documents" icon={<TextFileIcon size="lg" />} />
        <SidebarItem text="Links" icon={<LinkIcon size="lg" />} />
        <SidebarItem text="Tags" icon={<HashtagIcon size="lg" />} />
      </div>
    </div>
  )
}

export default Sidebar