import React, { useEffect, useState } from 'react';
import IosPermissionModal from './IosPermissionModal'; // Make sure to update the path as needed
import './ParallaxBackground.css';

interface ParallaxBackgroundProps {
  image: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

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

  const requestPermission = async () => {
    const DeviceOrientationEventWithPermission = DeviceOrientationEvent as any;
    if (typeof DeviceOrientationEventWithPermission.requestPermission === 'function') {
      const response = await DeviceOrientationEventWithPermission.requestPermission();
      if (response === 'granted') {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      }
    }
  };

  useEffect(() => {
    if (isMobile()) {
      const DeviceOrientationEventWithPermission = DeviceOrientationEvent as any;
      if (typeof DeviceOrientationEventWithPermission.requestPermission === 'function') {
        setShowModal(true);
      } else {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      }
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

  const handleCloseModal = () => setShowModal(false);
  const handleGrantPermission = () => {
    setShowModal(false);
    requestPermission();
  };

  return (
    <>
      <div 
        className="background-container"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <IosPermissionModal
        show={showModal}
        handleClose={handleCloseModal}
        handleGrantPermission={handleGrantPermission}
      />
    </>
  );
};

export default ParallaxBackground;
