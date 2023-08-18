import React, { useEffect, useState } from 'react';
import './LatencyDisplay.css';
function LatencyDisplay() {
  const [latency, setLatency] = useState(null);
  let ws;

  useEffect(() => {
    ws = new WebSocket('ws://localhost:55455');

    ws.addEventListener('open', () => {
      console.log('WebSocket connected');

      ws.addEventListener('message', (event) => {
        const packetTimestamp = parseInt(event.data);
        const currentTimestamp = Date.now();
        const packetLatency = currentTimestamp - packetTimestamp;

        setLatency(packetLatency);
      });

      ws.addEventListener('close', () => {
        console.log('WebSocket connection closed');
      });
    });

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="latency-display">
      <p>Packet Latency: {latency !== null ? `${latency} ms` : 'Calculating...'}</p>
    </div>
  );
}

export default LatencyDisplay;
