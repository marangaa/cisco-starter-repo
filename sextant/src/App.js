// App.js
import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPAddress from './IPAddress';
import './App.css';

function App() {
  return (
    <div>
      <Banner />
      <Exhibit heading="IP Addresses">
        <IPAddress version="v4" />
        <IPAddress version="v6" />
      </Exhibit>
      {/* Other components and content */}
    </div>
  );
}

export default App;
