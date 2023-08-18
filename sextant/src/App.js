import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import './App.css'

function App() {
  return (
    <div>
      <Banner />
      <Exhibit heading="First Exhibit">
        {/* Content for the first exhibit */}
      </Exhibit>
      <Exhibit heading="Second Exhibit">
        {/* Content for the second exhibit */}
      </Exhibit>
      {/* Other components and content */}
    </div>
  );
}

export default App;
