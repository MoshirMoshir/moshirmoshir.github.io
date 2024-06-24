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
        <p>Welcome to the Minecraft SMP project page. This is an example project page.</p>
      </div>
      <div className="tabs-container">
        <TabContainer tabs={tabs} />
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
  },
});

export default MinecraftSMP;
