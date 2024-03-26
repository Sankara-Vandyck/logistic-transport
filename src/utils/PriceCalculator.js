import React, { useState } from 'react';

function PriceCalculator() {
  const [weight, setWeight] = useState(0);
  const [distance, setDistance] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState('standard');
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    let basePrice = weight * distance * 0.5;
    if (deliveryTime === 'express') {
      basePrice *= 1.5;
    }
    setPrice(basePrice.toFixed(2));
  };

  const [isOpen, setIsOpen] = useState(false);

  const openCalculator = () => {
    setIsOpen(true);
  };

  const closeCalculator = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {!isOpen && (
        <button onClick={openCalculator} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Open Price Calculator
        </button>
      )}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="p-8 bg-white border rounded shadow-md relative">
            <button onClick={closeCalculator} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h2 className="text-2xl font-bold text-center flex justify-center align-middle m-auto bg-sky-500 mb-8 w-[175px]">Price Calculator</h2>
            <div className="flex items-center mb-4">
              <img src="/path/to/weight-icon.png" alt="Weight" className="w-10 h-10 mr-2 text-black" />
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="flex-1 border rounded py-2 px-3 text-black" placeholder="Weight (lbs)" />
            </div>
            <div className="flex items-center mb-4">
              <img src="/path/to/distance-icon.png" alt="Distance" className="w-10 h-10 mr-2 text-black" />
              <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} className="flex-1 border rounded py-2 px-3 text-black" placeholder="Distance (miles)" />
            </div>
            <div className="flex items-center mb-4">
              <img src="/path/to/time-icon.png" alt="Time" className="w-10 h-10 mr-2 text-black" />
              <select value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} className="flex-1 border rounded py-2 px-3 text-black">
                <option value="standard">Standard (3-5 days)</option>
                <option value="express">Express (1-2 days)</option>
              </select>
            </div>
            <button onClick={calculatePrice} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Calculate Price</button>
            <div className="text-center mt-8">
              <div className="text-3xl font-bold text-gray-600">${price}</div>
              <div className="text-gray-500">Estimated price for your shipment</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PriceCalculator;
