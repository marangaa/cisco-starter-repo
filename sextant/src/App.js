import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPDisplay from './IPDisplay';
import './App.css';
import LatencyDisplay from "./LatencyDisplay";

function App() {
  return (
    <div>
      <Banner />
      <Exhibit heading="IPv4 Address">
        <IPDisplay version="IPv4" />
      </Exhibit>
      <Exhibit heading="IPv6 Address">
        <IPDisplay version="IPv6" />
      </Exhibit>
      <Exhibit heading="Packet latency">
          <LatencyDisplay />
      </Exhibit>
    </div>
  );
}

export default App;
