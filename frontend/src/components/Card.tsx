import DeleteIcon from "../icons/DeleteIcon"
import { ShareIcon } from "../icons/ShareIcon"
import TextFileIcon from "../icons/TextFileIcon"

type CardProps = {
  title: string,
  link: string,
  type: "twitter" | "youtube",
}

const Card = ({ title, link, type }: CardProps) => {
  return (
    <>
      <div className="bg-white p-6 max-h-sm h-auto m-5 shadow-md rounded-lg max-w-sm w-auto">
        <div className="flex items-center p-2 font-semibold justify-between">
          <TextFileIcon size="lg" />
          <div className="text-xl">{title}</div>
          <div className="flex gap-2">
            <a href={link} target="_blank"></a>
            <ShareIcon size="lg" />
            <DeleteIcon size="lg" />
          </div>
        </div>
        <div className="text-3xl font-semibold pb-2"></div>
        {type === "youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        {type === "twitter" && <blockquote className="twitter-tweet"><a href={link}></a></blockquote>}
      </div>
    </>
  )
}

export default Card