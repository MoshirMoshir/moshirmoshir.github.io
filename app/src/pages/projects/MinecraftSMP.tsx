// MinecraftSMP.tsx
import React from 'react';
import { ProjectMetadata } from './loadProjects';

const MinecraftSMP: React.FC & { metadata?: ProjectMetadata } = () => {
  return (
    <div>
      <h1>Minecraft SMP</h1>
      <p>Welcome to the Minecraft SMP project page. This is an example project page.</p>
    </div>
  );
};

MinecraftSMP.metadata = {
  title: 'Minecraft SMP',
  description: 'A detailed description of the Minecraft SMP project.',
  date: '2024-04-25',
  featured: true,
};

export default MinecraftSMP;
