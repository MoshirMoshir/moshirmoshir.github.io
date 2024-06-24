import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const OverviewTab: React.FC = () => (
  <Container>
    <Carousel className="mb-4">
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Images to be implemented</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Row>
      <Col md={6}>
        <Card className="mb-4 transparent-container">
          <Card.Body>
            <Card.Title>Welcome to My Minecraft SMP</Card.Title>
            <Card.Text>
              My server offers a unique blend of gameplay elements, combining the best of both Java and Bedrock editions.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="mb-4 transparent-container">
          <Card.Body>
            <Card.Title>Unique Features</Card.Title>
            <Card.Text>
              Explore custom server-sided mods and datapacks that enhance the Minecraft experience while maintaining compatibility with Vanilla clients.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <Card className="mb-4 transparent-container">
          <Card.Body>
            <Card.Title>Join the Community</Card.Title>
            <Card.Text>
              Connect with players from around the world and enjoy seamless gameplay across different devices. Whether you are on Java or Bedrock, my SMP ensures a unified experience.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default OverviewTab;
