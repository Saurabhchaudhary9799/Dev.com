import React from 'react'
import HeroSection from '../Components/homeComponents/HeroSection'
import Trusty from '../Components/homeComponents/Trusty'
import Card1 from '../Components/homeComponents/Card1'
import Card2 from '../Components/homeComponents/Card2'
import Card3 from '../Components/homeComponents/Card3'
import JoinCard from '../Components/homeComponents/JoinCard'
import SignupCard from '../Components/homeComponents/SignupCard'
import Testimonials from '../Components/homeComponents/Testimonials'

const HomePage = () => {
  return (
    <>
     <HeroSection/>
     <Trusty/>
     <Card1/>
     <Card2/>
     <Card3/>
     <JoinCard/>
     <Testimonials/>
     <SignupCard/>
    </>
  )
}

export default HomePage