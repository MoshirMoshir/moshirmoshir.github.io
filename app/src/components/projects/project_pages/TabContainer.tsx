import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './TabContainer.css';

interface TabContainerProps {
  tabs: {
    eventKey: string;
    title: string;
    content: React.ReactNode;
  }[];
}

const TabContainer: React.FC<TabContainerProps> = ({ tabs }) => {
  return (
    <Tabs defaultActiveKey={tabs[0].eventKey} id="minecraft-smp-tabs" className="mb-3">
      {tabs.map((tab) => (
        <Tab eventKey={tab.eventKey} title={tab.title} key={tab.eventKey}>
          {tab.content}
        </Tab>
      ))}
    </Tabs>
  );
};

export default TabContainer;
