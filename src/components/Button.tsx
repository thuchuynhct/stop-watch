import React from "react"
import { IconType } from "react-icons"

function Button({ onClick, Icon, text, className }: { onClick?: React.MouseEventHandler, Icon: IconType, text?: string, className?: string }) {
  return (
    <button onClick={onClick} className={`${className ?? ""}`}>
      <Icon className={`block w-full`} />
      {text && (<p className="text-[1.2rem] border-solid border-4 border-transparent border-b-[#f69514]">{text}</p>)}
    </button>
  )
}

export default Button
