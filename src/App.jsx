import { Route, Routes  } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import PricingPage from './Pages/PricingPage'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
function App() {

  return (
    <>
       <Header/>
       <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/pricing' element={<PricingPage/>}/>
         <Route path='/about' element={<AboutUs/>}/>
         <Route path='/contact' element={<Contact/>}/>
       </Routes>
<Footer/>
    </>
  )
}

export default App
