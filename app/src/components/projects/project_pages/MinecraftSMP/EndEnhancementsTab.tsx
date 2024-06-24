import React from 'react';
import { Container, Carousel, Accordion } from 'react-bootstrap';

const EndEnhancementsTab: React.FC = () => (
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
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>TBD</Accordion.Header>
        <Accordion.Body>
          ku
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>TBD</Accordion.Header>
        <Accordion.Body>
          ke
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>TBD</Accordion.Header>
        <Accordion.Body>
          ko
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Container>
);

export default EndEnhancementsTab;
