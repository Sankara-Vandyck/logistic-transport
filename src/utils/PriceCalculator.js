import React, { useState } from 'react';

const PriceCalculator = () => {
    const [distance, setDistance] = useState(0);
    const [weight, setWeight] = useState(0);
    const [price, setPrice] = useState(0);
    const [clicked, setClicked] = useState(false); 

    const calculatePrice = () => {
        // Example calculation: $10 per km for distance and $2 per kg for weight
        const distanceCost = distance * 10;
        const weightCost = weight * 2;
        setPrice(distanceCost + weightCost);
    };

    const handleClick = () => {
        calculatePrice(); 
        setClicked(true); 
    };

    return (
        <div className='block'>
            <button onClick={() => setClicked(!clicked)}>Prices</button>
            {clicked && (
                <div>
                    <div>
                        Distance (km):
                        <input
                            type="number"
                            value={distance}
                            onChange={(e) => setDistance(e.target.value)}
                        />
                    </div>
                    <div>
                        Weight (kg):
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <button onClick={handleClick}>Calculate Price</button>
                    {clicked && <p>Total Price: ${price.toFixed(2)}</p>}
                </div>
            )}
        </div>
    );
};

export default PriceCalculator;
