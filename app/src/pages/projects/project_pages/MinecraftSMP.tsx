import React from 'react';
import { Tab, Tabs, Card, Row, Col, Container, Carousel } from 'react-bootstrap';
import ParallaxBackground from '@components/projects/project_pages/ParallaxBackground';
import background from '@assets/MinecraftBackground.png';
import './MinecraftSMP.css';

const MinecraftSMP: React.FC = () => {
  return (
    <div>
      <ParallaxBackground image={background} />
      <Container className="content">
        <h1>Minecraft SMP</h1>
        <p>
          Welcome to the Minecraft SMP project page. This is an example project page. A Minecraft server built on an Oracle Cloud VM. Using Fabric, both Java and Bedrock Clients can connect (Java account still required) with player sync across all devices. Additionally, a custom set of server-sided mods and datapacks enhance the Minecraft experience while also still being compatible with a Vanilla client. The server is still in development but is currently open to the public.
        </p>
        <p>
          Java Address: <strong>smp.minecraft.org</strong><br />
          Bedrock Address: <strong>smb.minecraft.org</strong>
        </p>
      </Container>
      <Container className="tabs-container">
        <Tabs defaultActiveKey="overview" id="minecraft-smp-tabs" className="mb-3">
          <Tab eventKey="overview" title="Overview">
            <OverviewSection />
          </Tab>
          <Tab eventKey="gameplay-changes" title="Gameplay Changes">
            <CardDeckSection title="Gameplay Changes" />
          </Tab>
          <Tab eventKey="how-to-join" title="How to Join">
            <CardDeckSection title="How to Join" />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

const OverviewSection: React.FC = () => (
  <>
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
    <Row>
      <Col md={6}>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Welcome to Minecraft SMP</Card.Title>
            <Card.Text>
              Our server offers a unique blend of gameplay elements, combining the best of both Java and Bedrock editions.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="mb-4">
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
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Join Our Community</Card.Title>
            <Card.Text>
              Connect with players from around the world and enjoy seamless gameplay across different devices. Whether you are on Java or Bedrock, our server ensures a unified experience.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </>
);

const CardDeckSection: React.FC<{ title: string }> = ({ title }) => (
  <Row className="card-deck">
    <Col md={4}>
      <Card className="mb-4">
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>{title} Card 1</Card.Title>
          <Card.Text>This is a brief description of the first item in the {title} section.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="mb-4">
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>{title} Card 2</Card.Title>
          <Card.Text>This is a brief description of the second item in the {title} section.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="mb-4">
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>{title} Card 3</Card.Title>
          <Card.Text>This is a brief description of the third item in the {title} section.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

Object.defineProperty(MinecraftSMP, 'metadata', {
  value: {
    title: 'Minecraft SMP',
    description: 'A detailed description of the Minecraft SMP project.',
    date: '2024-04-25',
    featured: true,
  },
});

export default MinecraftSMP;
