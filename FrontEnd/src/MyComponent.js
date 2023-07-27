import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make the API request to the Spring Boot backend
    axios.get('http://localhost:8080/api/data')
      .then((response) => {
        setData(response.data); // Update the state with the received data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default MyComponent;