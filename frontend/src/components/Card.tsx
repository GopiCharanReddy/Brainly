import DeleteIcon from "../icons/DeleteIcon"
import { ShareIcon } from "../icons/ShareIcon"
import TextFileIcon from "../icons/TextFileIcon"

export type CardProps = {
  id?: string,
  title: string,
  link: string,
  type: "Twitter" | "Youtube" | "Documents" | "Links" | "Tags",
}

const Card = ({ id, title, link, type }: CardProps) => {
  return (
    <>
      <div id={id} className="bg-white p-6 min-w-80 m-5 shadow-md rounded-lg max-w-sm w-auto">
        <div className="flex items-center p-2 font-semibold justify-between">
          <TextFileIcon size="lg" />
          <div className="text-xl">{title}</div>
          <div className="flex gap-2">
            <a href={link} target="_blank"></a>
            <ShareIcon onClick={() => <a href={link} target="_blank" ></a>} size="lg" />
            <DeleteIcon size="lg" />
          </div>
        </div>
        <div className="text-3xl font-semibold pb-2"></div>
        {type === "Youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        {type === "Twitter" && <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true"><a href={`https://twitter.com/Reza_Zadeh/status/${link.slice(-19)}?ref_src=twsrc%5Etfw`}></a></blockquote>}</div>
    </>
  )
}

export default Card