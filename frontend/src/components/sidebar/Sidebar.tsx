import BrainIcon from "../../icons/BrainIcon"
import HashtagIcon from "../../icons/HashtagIcon"
import LinkIcon from "../../icons/LinkIcon"
import TextFileIcon from "../../icons/TextFileIcon"
import TwitterIcon from "../../icons/TwitterIcon"
import YoutubeIcon from "../../YoutubeIcon"
import { useFilter } from "../store"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  const { setFilterContent } = useFilter()

  return (
    <div className="bg-white shadow-xl w-72 fixed h-full">
      <div onClick={() => setFilterContent('')} className="flex text-2xl font-semibold m-2 cursor-pointer items-center">
        {<BrainIcon />} Second Brain
      </div>
      <div>
        <SidebarItem text="Twitter" onClick={() => setFilterContent('Twitter')} icon={<TwitterIcon  size="lg" />} />
        <SidebarItem text="Youtube" onClick={() => setFilterContent('Youtube')} icon={<YoutubeIcon  size="lg" />} />
        <SidebarItem text="Documents" onClick={() => setFilterContent('Documents')} icon={<TextFileIcon  size="lg" />} />
        <SidebarItem text="Links" onClick={() => setFilterContent('Links')} icon={<LinkIcon  size="lg" />} />
        <SidebarItem text="Tags" onClick={() => setFilterContent('Tags')} icon={<HashtagIcon  size="lg" />} />
      </div>
    </div>
  )
}

export default Sidebar