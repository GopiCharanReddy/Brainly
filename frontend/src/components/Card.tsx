import { useMutation, useQueryClient } from "@tanstack/react-query"
import DeleteIcon from "../icons/DeleteIcon"
import { ShareIcon } from "../icons/ShareIcon"
import TextFileIcon from "../icons/TextFileIcon"
import axios from "axios"
import YoutubeIcon from "../YoutubeIcon"
import TwitterIcon from "../icons/TwitterIcon"
import LinkIcon from "../icons/LinkIcon"
import HashtagIcon from "../icons/HashtagIcon"
import type { IconProps } from "../icons/IconsProps"
import type { ComponentType } from "react"

type ContentType = "Twitter" | "Youtube" | "Documents" | "Links" | "Tags"
export type CardProps = {
  _id?: string,
  title: string,
  link: string,
  type: ContentType | null,
}

const Card = ({ _id, title, link, type }: CardProps) => {
  const queryClient = useQueryClient()

  const {mutate} = useMutation({
    mutationKey: ['deleteContent',_id],
    mutationFn: async () => {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/content`,{
        data: {
          contentId: _id
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      },)
    },
     onSuccess: () => {
      console.log("Delete successful. Invalidating ['content'] query.");
      queryClient.invalidateQueries({ queryKey: ['content'] });
    },
    onError: (error) => {
      console.log('Delete Failed: ', error)
    }
  })
  const iconMap: Record<ContentType, ComponentType<IconProps>> = {
    Youtube: YoutubeIcon,
    Twitter: TwitterIcon,
    Documents: TextFileIcon,
    Links: LinkIcon,
    Tags: HashtagIcon
  }
  const IconComponent: ComponentType<IconProps> = type ? iconMap[type] : TextFileIcon;
  return (
    <>
      <div id={_id} className="bg-white p-6 min-w-80 m-5 shadow-md rounded-lg max-w-sm w-auto">
        <div className="flex items-center p-2 font-semibold justify-between">
          <IconComponent size="lg" />
          <div className="text-xl">{title}</div>
          <div className="flex gap-2">
            <a href={link} target="_blank"></a>
            <ShareIcon onClick={() => { navigator.clipboard.writeText(link); alert('Link copied to clipboard.'); }} size="lg" />
            <div onClick={() => mutate()}>
              <DeleteIcon size="lg" />
            </div>
          </div>
        </div>
        <div className="text-3xl font-semibold pb-2"></div>
        {type === null && <div></div>}
        {type === "Youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        {type === "Twitter" && <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true"><a href={`https://twitter.com/Reza_Zadeh/status/${link.slice(-19)}?ref_src=twsrc%5Etfw`}></a></blockquote>}
        {type === "Documents" && <iframe src={link} allowFullScreen ></iframe>}
        {type === "Links" || type === "Tags" ? (<div className="p-4 text-xl">{link}</div>) : null}
      </div>
    </>
  )
}

export default Card