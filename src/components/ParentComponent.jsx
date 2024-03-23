import React, { useState } from 'react'
import PriceCalculator from '../utils/PriceCalculator'

const ParentComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
  return (
    <div
    onMouseEnter={() => setIsVisible(true) }
    
    onMouseLeave={() => setIsVisible(false)}
    className=" bg-gray-200"
    
    >
        Price Calculator
        {isVisible && <PriceCalculator />}
    </div>
  )
}

export default ParentComponent