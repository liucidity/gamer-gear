import React from 'react'

const MenuButtons = ({children, link}) => {
  return (
    <a className="border-2 border-black ml-5" href={link}>{children}</a>
  )
}

export default MenuButtons