import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const NewItemsTab: React.FC = () => (
  <Row className="card-deck">
    <Col md={4}>
      <Card className="mb-4 transparent-container">
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Item 1</Card.Title>
          <Card.Text>Page to be implemented...</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="mb-4 transparent-container">
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Item 2</Card.Title>
          <Card.Text>A</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="mb-4 transparent-container">
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Etc</Card.Title>
          <Card.Text>I</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default NewItemsTab;
