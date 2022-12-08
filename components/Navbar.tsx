import React from 'react'
import MenuButtons from './Widgets/MenuButtons'

const Navbar = () => {
  return (
    <nav className='border-2 border-blue-700 w-screen px-14 py-5'>
      <div className='flex justify-between'>
        <div className='border-2 border-black'>
          Logo Here
        </div>
        <div className='border-2 border-black flex'>
          <MenuButtons link={'/products'}>Products</MenuButtons>
          <MenuButtons link={'/about'}>About</MenuButtons>
          <MenuButtons link={'/players'}>Players</MenuButtons>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

// add later
// fixed top-0