import React from 'react'
import Navbar from '../container/Navbar'
import Footer from '../container/Footer'

const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />  
    </div>
  )
}

export default MainLayout