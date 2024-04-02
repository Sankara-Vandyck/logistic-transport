import React, { useState, useRef, useEffect } from 'react';

const SecondPage = () => {
    const [selected, setSelected] = useState(null);
    const containerRef = useRef(null);
  
    useEffect(() => {
      containerRef.current.style.display = "none";
    }, []);
  
    const handleChange = (event) => {
      setSelected(event.target.value);
      containerRef.current.style.display = "block";
    };

  return (
    <div className="w-[90%] h-[100%] flex mt-[80px] ml-[40px] mr-[40px]">
      <div>
        <div>
          <h1>
            Safe, Reliable And Express Logistic & Transport Solutions That Saves
            Your Time!
          </h1>
        </div>
        <div className="flex">
        <div ref={containerRef}>
      <div>
        <label>
          <input
            type="radio"
            value="vision"
            checked={selected === "vision"}
            onChange={handleChange}
          />
          <img src="path/to/vision-image.jpg" alt="Vision" />
          Our Vision
        </label>
        <label>
          <input
            type="radio"
            value="mission"
            checked={selected === "mission"}
            onChange={handleChange}
          />
          <img src="path/to/mission-image.jpg" alt="Mission" />
          Our Mission
        </label>
      </div>
      {selected === "vision" && (
        <div>
          <p>Our vision statement goes here.</p>
        </div>
      )}
      {selected === "mission" && (
        <div>
          <p>Our mission statement goes here.</p>
        </div>
      )}
    </div>

          <div>
            <div>
              <h2>
                Logisti Group is a representative logistics operator providing
                full range of service in the sphere of customs clearance and
                transportation worldwide for any type of cargo.
              </h2>
            </div>
            <div>
              <h3>
                We pride ourselves on providing the best transport and shipping
                services available allover the world. Our skilled personnel,
                utilising the latest communications, tracking and processing
                software, combined with decades of experience! Through
                integrated supply chain solutions, Logisti drives sustainable
                competitive advantages to some of Australia’s largest companies.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p>
          We pride ourselves on providing the best transport and shipping
          services available allover the world. Our skilled personnel, utilising
          the latest communications, tracking and processing software, combined
          with decades of experience! Through integrated supply chain solutions,
          Logisti drives sustainable competitive advantages to some of
          Australia’s largest companies.
        </p>
      </div>
    </div>
  );
};

export default SecondPage;
