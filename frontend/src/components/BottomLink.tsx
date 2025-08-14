import { Link } from 'react-router-dom'

type LinkProps = {
  label: string,
  to: string,
  text: string
}

const BottomLink = ({ label, to, text }: LinkProps) => {
  return (
    <div>
      {label}
      <span className='text-blue-800 underline'>
        <Link to={to} >{text}</Link>
      </span>
    </div>
  )
}

export default BottomLink