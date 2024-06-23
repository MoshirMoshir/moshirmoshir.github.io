import React from 'react';
import ParallaxBackground from '@components//projects/project_pages/ParallaxBackground';
import background from '@assets/MinecraftBackground.png';
import './MinecraftSMP.css';

const MinecraftSMP: React.FC = () => {
  return (
    <div>
      <ParallaxBackground image={background} />
      <div className="content">
        <h1>Minecraft SMP</h1>
        <p>Welcome to the Minecraft SMP project page. This is an example project page.</p>
      </div>
    </div>
  );
};

Object.defineProperty(MinecraftSMP, 'metadata', {
  value: {
    title: 'Minecraft SMP',
    description: 'A detailed description of the Minecraft SMP project.',
    date: '2024-04-25',
    featured: true,
  }
});

export default MinecraftSMP;
