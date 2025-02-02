import CardsSection from '@/components/CardSection'
import CeramicProducts from '@/components/CeramicProducts'
import SubscriptionSection from '@/components/SubscriptionSection'
import Product from '@/components/Product'
import React from 'react'

const page = () => {
  return (
    <div>
        <Product/>
        <CeramicProducts/>
        <CardsSection/>
        <SubscriptionSection/>
    </div>
  )
}

export default page