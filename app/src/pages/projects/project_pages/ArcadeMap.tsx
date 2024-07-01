import React from 'react';
import './ArcadeMap.css';

const ArcadeMap: React.FC = () => {
  return (
    <div>
      <div className="content">
        <h1>Arcade Map</h1>
        <p>Welcome to the Arcade Map project page. This is a log of the arcades I go to and want to go to, along with notes on each place.</p>
        <iframe 
          src="https://www.google.com/maps/d/embed?mid=1HuypWpgYWsDKioyfm4F3zyaeL31JVxw&ehbc=2E312F&noprof=1" 
          width="640" 
          height="480"
          className="map-embed"
        ></iframe>
      </div>
    </div>
  );
};

Object.defineProperty(ArcadeMap, 'metadata', {
  value: {
    title: 'Arcade Map',
    hash: 'ArcadeMap',
    description: 'A detailed map of the arcades I visit, including notes and details about each location.',
    date: '2024-06-24',
    featured: true,
  }
});

export default ArcadeMap;
