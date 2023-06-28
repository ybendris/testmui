import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Layout from './Login'
import Test from './Test'
import Test2 from './Test copy'
import { HomePage } from './Home'
import { AboutPage } from './About'

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout isDrawerOpen={isDrawerOpen} handleDrawerToggle={handleDrawerToggle}><AboutPage /></Layout>} />
          <Route path="/test2" element={<Layout isDrawerOpen={isDrawerOpen} handleDrawerToggle={handleDrawerToggle}><HomePage /></Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
