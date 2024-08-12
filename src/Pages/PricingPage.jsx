import React from 'react'
import Price from '../Components/pricingComponents/Price'
import Feature from '../Components/pricingComponents/Feature'
import SignupCard from '../Components/homeComponents/SignupCard'
import FAQ from '../Components/pricingComponents/FAQ'

const PricingPage = () => {
  return (
    <>
      <Price/>
      <Feature/>
      <FAQ/>
      <SignupCard/>
     
    </>
  )
}

export default PricingPage