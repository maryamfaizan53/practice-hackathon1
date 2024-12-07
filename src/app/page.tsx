import React from 'react'

import Hero from '@/components/hero'
import FlashSales from '@/components/flashsales'
import Catagories from '@/components/catagories'
import Bestselling from '@/components/bestselling'
import Banner from '@/components/banner'
import ExploreProducts from '@/components/exploreProducts'
import CustomerCare from '@/components/customerCare'

import NewArrival from '../components/newArrival'





const Home = () => {
  return (
    <div>
      
      <Hero/>
      <FlashSales/>
      <Catagories/>
      <Bestselling/>
      <Banner/>
      <ExploreProducts/>
     <NewArrival/>
     <CustomerCare/>
    
    </div>
  )
}

export default Home