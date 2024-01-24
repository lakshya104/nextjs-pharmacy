import React from 'react'
import ProductCarousel from './ProductCarousel'
import { shuffledProducts } from '../staticData'

const HealthProduct = () => {
  return (
    <ProductCarousel title='Health Product' timer={null} productArray={shuffledProducts} />
  )
}

export default HealthProduct
