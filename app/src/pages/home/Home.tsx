import React from 'react';
import Carrot from '@assets/Carrot.svg';
import './Home.css'; // Import the custom CSS

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header>
        <h2>Under Construction...</h2>
        <p>No Carrots yet,<br />
        Just code. Lots of code.</p>
      </header>
      <img src={Carrot} alt="Carrot" className="responsive-img"/>
    </div>
  );
};

export default Home;
