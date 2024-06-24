import React from 'react';
import { Container, Carousel, Accordion } from 'react-bootstrap';

const NetherEnhancementsTab: React.FC = () => (
  <Container>
    <Carousel className="mb-4">
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Enhancement 1</Accordion.Header>
        <Accordion.Body>
          Detailed description of the first nether enhancement.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Enhancement 2</Accordion.Header>
        <Accordion.Body>
          Detailed description of the second nether enhancement.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Enhancement 3</Accordion.Header>
        <Accordion.Body>
          Detailed description of the third nether enhancement.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Container>
);

export default NetherEnhancementsTab;
