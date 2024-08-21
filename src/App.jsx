import React from 'react'
import MainLayout from './layouts/MainLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
const App = () => {
  return (
    <div>
      <>
      <BrowserRouter>
      <MainLayout>
        <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/faq' element={<FaqPage />} />
        </Routes>
      </MainLayout>
      </BrowserRouter>
      
      </>
    </div>
  )
}

export default App