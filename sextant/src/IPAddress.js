import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IPAddress({ version }) {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await axios.get(`https://api.ipify.org?format=json&ipv=${version}`);
        setIpAddress(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIPAddress();
  }, [version]);

  return (
    <div className="ip-address">
      <p>{`Your public ${version === 'v4' ? 'IPv4' : 'IPv6'} address: ${ipAddress}`}</p>
    </div>
  );
}

export default IPAddress;
