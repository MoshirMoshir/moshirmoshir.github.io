import React from 'react';
import { Accordion } from 'react-bootstrap';

const GameplayChangesTab: React.FC = () => (
  <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Change 1</Accordion.Header>
      <Accordion.Body>
        Detailed description of the first gameplay change.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Change 2</Accordion.Header>
      <Accordion.Body>
        Detailed description of the second gameplay change.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>Change 3</Accordion.Header>
      <Accordion.Body>
        Detailed description of the third gameplay change.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

export default GameplayChangesTab;
