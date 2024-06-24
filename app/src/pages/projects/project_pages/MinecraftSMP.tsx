import React from 'react';
import ParallaxBackground from '@components/projects/project_pages/ParallaxBackground';
import TabContainer from '@components/projects/project_pages/TabContainer';
import OverviewTab from '@components/projects/project_pages/MinecraftSMP/OverviewTab';
import HowToJoinTab from '@components/projects/project_pages/MinecraftSMP/HowToJoinTab';
import GameplayChangesTab from '@components/projects/project_pages/MinecraftSMP/GameplayChangesTab';
import NewItemsTab from '@components/projects/project_pages/MinecraftSMP/NewItemsTab';
import OverworldEnhancementsTab from '@components/projects/project_pages/MinecraftSMP/OverworldEnhancementsTab';
import NetherEnhancementsTab from '@components/projects/project_pages/MinecraftSMP/NetherEnhancementsTab';
import EndEnhancementsTab from '@components/projects/project_pages/MinecraftSMP/EndEnhancementsTab';
import SupportTab from '@components/projects/project_pages/MinecraftSMP/SupportTab';
import background from '@assets/MinecraftBackground.png';
import './MinecraftSMP.css';

const MinecraftSMP: React.FC = () => {
  const tabs = [
    { eventKey: 'overview', title: 'Overview', content: <OverviewTab /> },
    { eventKey: 'howtojoin', title: 'How to Join', content: <HowToJoinTab /> },
    { eventKey: 'gameplaychanges', title: 'Gameplay Enhancements', content: <GameplayChangesTab /> },
    { eventKey: 'newitems', title: 'New Items', content: <NewItemsTab /> },
    { eventKey: 'overworld', title: 'Overworld Enhancements', content: <OverworldEnhancementsTab /> },
    { eventKey: 'nether', title: 'Nether Enhancements', content: <NetherEnhancementsTab /> },
    { eventKey: 'end', title: 'End Enhancements', content: <EndEnhancementsTab /> },
    { eventKey: 'support', title: 'Support', content: <SupportTab /> },
  ];

  return (
    <div>
      <ParallaxBackground image={background} />
      <div className="content">
        <h1>Minecraft SMP</h1>
        <p>Welcome to the Minecraft SMP project page.</p>
        <p>This Minecraft server is built on a Oracle Cloud VM. Using Fabric, both Java and Bedrock Clients can connect (Java account still required) with player sync across all devices. Additionally, a custom set of server-sided mods and datapacks enhance the minecraft experience while also still being compatible with Vanilla clients. The server is still in development, but is currently open to the public.</p>
      </div>
      <br />
      <div className="tabs-container">
        <TabContainer tabs={tabs} />
      </div>
    </div>
  );
};

Object.defineProperty(MinecraftSMP, 'metadata', {
  value: {
    title: 'Moshir\'s Minecraft SMP',
    hash: 'MinecraftSMP',
    description: 'My personal public Minecraft server! Using Fabric and datapacks to enhance gameplay while remaining Vanilla-client friendly. Also playable on Bedrock devices! Feel free to join and have fun!',
    image: 'https://wallpapers-clan.com/wp-content/uploads/2023/10/minecraft-grass-tree-desktop-wallpaper-preview.jpg',
    date: '2024-04-25',
    featured: true,
  },
});

export default MinecraftSMP;
