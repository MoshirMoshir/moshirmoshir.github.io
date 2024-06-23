import React, { useEffect } from 'react';
import './MinecraftSMP.css';
import background from '@assets/MinecraftBackground.png';

const MinecraftSMP: React.FC = () => {
  const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const handleMouseMove = (e: MouseEvent) => {
    const parallax = document.querySelector('.background-container') as HTMLElement;
    const amountMovedX = (window.innerWidth / 2 - e.clientX) / window.innerWidth * 100;
    const amountMovedY = (window.innerHeight / 2 - e.clientY) / window.innerHeight * 100;
    parallax.style.transform = `translate3d(${amountMovedX}px, ${amountMovedY}px, 0) scale(1.1)`;
  };

  const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
    const parallax = document.querySelector('.background-container') as HTMLElement;
    const amountMovedX = e.gamma ? e.gamma / 45 * 100 : 0;
    const amountMovedY = e.beta ? e.beta / 45 * 100 : 0;
    parallax.style.transform = `translate3d(${amountMovedX}px, ${amountMovedY}px, 0) scale(1.3)`;
  };

  useEffect(() => {
    if (isMobile()) {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (isMobile()) {
        window.removeEventListener('deviceorientation', handleDeviceOrientation);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div>
      <div 
        className="background-container"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
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
