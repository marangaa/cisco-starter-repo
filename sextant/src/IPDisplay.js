// IPDisplay.js
import React, { useState, useEffect } from 'react';
import './IPDisplay.css';

function IPDisplay({ version }) {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
          const apiEndpoint = version === 'IPv6' ? 'https://api6.ipify.org?format=json' : 'https://api64.ipify.org?format=json';
          const response = await fetch(apiEndpoint);
          const data = await response.json()
          setIpAddress(data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIpAddress();
  }, [version]);

  return (
    <div className="ip-display">
      <p>{`Your ${version} IP address: ${ipAddress}`}</p>
    </div>
  );
}

export default IPDisplay;
