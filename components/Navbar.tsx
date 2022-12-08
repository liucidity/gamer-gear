import React, { useState } from 'react'
import MenuButtons from './Widgets/MenuButtons'

const Navbar = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const handleDropDown = () => {
    dropDownOpen ? setDropDownOpen(false) : setDropDownOpen(true)
  }
  return (
    <>
      <nav className='border-2 border-blue-700 fixed top-0 w-screen px-14 py-5'>
        <div className='flex justify-between'>
          <div className='border-2 border-black'>
            Logo Here
          </div>
          <button className='border-2 border-purple-500 flex md:hidden' onClick={() => handleDropDown()}>DropDown</button>
          <div className='hidden md:flex border-2 border-black'>
            <MenuButtons link={'/products'}>Products</MenuButtons>
            <MenuButtons link={'/about'}>About</MenuButtons>
            <MenuButtons link={'/players'}>Players</MenuButtons>
          </div>
        </div>
      </nav>
      { dropDownOpen &&
        <div className='flex flex-col items-center justify-start border-2 border-black'>
          <MenuButtons link={'/products'}>Products</MenuButtons>
          <MenuButtons link={'/about'}>About</MenuButtons>
          <MenuButtons link={'/players'}>Players</MenuButtons>
        </div>
      }
    </>
  )
}

export default Navbar
