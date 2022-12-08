import React from 'react'

const MenuButtons = ({children, link}) => {
  return (
    <a className="mt-2 border-2 border-black md:mt-0 ml-5" href={link}>{children}</a>
  )
}

export default MenuButtons