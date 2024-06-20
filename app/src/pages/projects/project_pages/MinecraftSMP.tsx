// project_pages/MinecraftSMP.tsx
import React from 'react';

interface ProjectMetadata {
  title: string;
  description: string;
  date: string;
  featured: boolean;
}

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
