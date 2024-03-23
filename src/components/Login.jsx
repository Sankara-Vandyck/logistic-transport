import React, { useState, useEffect } from 'react';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [residentialAddress, setResidentialAddress] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);

   // Fetch countries data from the REST Countries API
   useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => {
        // Extract required fields (name and code) from the response
        const formattedData = data.map(country => ({
          name: country.name,
          code: country.alpha2Code,
        }));
        setCountries(formattedData);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);
  const handleRegistrationClick = () => {
    setShowForm(true);
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic here
    // For simplicity, let's assume all fields are required
    if (!firstName || !lastName || !email || !contact || !address || !residentialAddress || !country || !zipCode) {
      setError('All fields are required');
      return;
    }
    // Your login/registration logic goes here
    console.log('Registration successful');
    // Clear any previous error messages
    setError('');
    // Redirect to another page or perform any other action upon successful registration
  };

  return (
    <div>
      {!showForm && <button onClick={handleRegistrationClick}>GET STARTED</button>}
      {showForm && (
        <div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <div>
                <p>Welcome</p>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="contact">Contact:</label>
              <input
                type="text"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="residentialAddress">Residential Address:</label>
              <input
                type="text"
                id="residentialAddress"
                value={residentialAddress}
                onChange={(e) => setResidentialAddress(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Select a country</option>
                {countries.map(country => (
                  <option key={country.code} value={country.name}>{country.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="zipCode">ZIP Code:</label>
              <input
                type="text"
                id="zipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
  
};

export default Login;
