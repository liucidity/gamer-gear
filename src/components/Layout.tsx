// ---- Fonts
import { Roboto } from '@next/font/google'

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar></Navbar>
      <main className={`${roboto.variable} font-sans relative`}>{ children }</main>
      {/* <Footer></Footer> */}
    </>
  )
}

export default Layout