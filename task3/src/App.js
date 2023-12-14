import React, { useState } from 'react';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [responseData, setResponseData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://chimpu.xyz/api/post.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phonenumber: phoneNumber }),
      });

      
      const dataFromHeaders = response.headers.get('your-header-name'); // replace 'your-header-name' with the actual header name

      setResponseData(dataFromHeaders);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {responseData && (
        <div>
          <h2>Data received in headers:</h2>
          <p>{responseData}</p>
        </div>
      )}
    </div>
  );
};

export default App;
