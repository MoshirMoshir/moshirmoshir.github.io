import React, { useEffect } from 'react';
import './ParallaxBackground.css';

interface ParallaxBackgroundProps {
  image: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ image }) => {
  const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const handleMouseMove = (e: MouseEvent) => {
    const parallax = document.querySelector('.background-container') as HTMLElement;
    const amountMovedX = (window.innerWidth / 2 - e.clientX) / window.innerWidth * 100;
    const amountMovedY = (window.innerHeight / 2 - e.clientY) / window.innerHeight * 100;
    parallax.style.transform = `translate3d(${amountMovedX}px, ${amountMovedY}px, 0) scale(1.1)`;
  };

  const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
    const parallax = document.querySelector('.background-container') as HTMLElement;

    let amountMovedX = 0;
    let amountMovedY = 0;

    if (screen.orientation.angle === 0 || screen.orientation.angle === 180) {
      // Portrait
      amountMovedX = e.gamma ? e.gamma / 45 * 50 : 0;
      amountMovedY = e.beta ? e.beta / 45 * 50 : 0;
    } else if (screen.orientation.angle === 90 || screen.orientation.angle === -90) {
      // Landscape
      amountMovedX = e.beta ? e.beta / 45 * 50 : 0;
      amountMovedY = e.gamma ? e.gamma / 45 * 50 : 0;
    }

    parallax.style.transform = `translate3d(${amountMovedX}px, ${amountMovedY}px, 0) scale(1.4)`;
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
    <div 
      className="background-container"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default ParallaxBackground;
