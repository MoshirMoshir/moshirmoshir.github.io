import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const NewItemsTab: React.FC = () => (
  <Row className="card-deck">
    <Col md={4}>
      <Card className="mb-4">
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>New Item 1</Card.Title>
          <Card.Text>Description of the first new item.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="mb-4">
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>New Item 2</Card.Title>
          <Card.Text>Description of the second new item.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="mb-4">
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>New Item 3</Card.Title>
          <Card.Text>Description of the third new item.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default NewItemsTab;
