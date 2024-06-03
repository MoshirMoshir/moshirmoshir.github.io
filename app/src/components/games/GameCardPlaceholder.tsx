import React from 'react';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const GameCardPlaceholder: React.FC = () => {
  return (
    <Card style={{ width: '18rem', marginBottom: '1rem' }}>
      <Card.Body>
        <Placeholder as={Card.Title} animation="wave">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="wave">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
      </Card.Body>
    </Card>
  );
};

export default GameCardPlaceholder;
