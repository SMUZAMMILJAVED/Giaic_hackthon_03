import Filters from '@/components/Filters'
import Heading from '@/components/Heading'
import ProductListings from '@/components/ProductListings'
import React from 'react'

const page = () => {
  return (
    <div>
        <Heading/>
        <Filters/>
        <ProductListings/>
    </div>
  )
}

export default page