import React from 'react';
import { Tab, Tabs, Card, Row, Col, Container, Carousel, Accordion, Button } from 'react-bootstrap';
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
          <Tab eventKey="how-to-join" title="How to Join">
            <HowToJoinSection />
          </Tab>
          <Tab eventKey="gameplay-changes" title="Gameplay Enhancements">
            <GameplayChangesSection />
          </Tab>
          <Tab eventKey="new-items" title="New Items">
            <NewItemsSection />
          </Tab>
          <Tab eventKey="overworld-enhancements" title="Overworld Enhancements">
            <OverworldEnhancementsSection />
          </Tab>
          <Tab eventKey="nether-enhancements" title="Nether Enhancements">
            <NetherEnhancementsSection />
          </Tab>
          <Tab eventKey="end-enhancements" title="End Enhancements">
            <EndEnhancementsSection />
          </Tab>
          <Tab eventKey="support" title="Support">
            <SupportSection />
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

const HowToJoinSection: React.FC = () => (
  <Container>
    <h2>How to Join</h2>
    <p>To join our Minecraft SMP server, follow the instructions below:</p>
    <p>
      Java Address: <Button variant="link" onClick={() => navigator.clipboard.writeText('smp.minecraft.org')}>smp.minecraft.org</Button><br />
      Bedrock Address: <Button variant="link" onClick={() => navigator.clipboard.writeText('smb.minecraft.org')}>smb.minecraft.org</Button>
    </p>
  </Container>
);

const GameplayChangesSection: React.FC = () => (
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

const NewItemsSection: React.FC = () => (
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

const OverworldEnhancementsSection: React.FC = () => (
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
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Enhancement 1</Accordion.Header>
        <Accordion.Body>
          Detailed description of the first overworld enhancement.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Enhancement 2</Accordion.Header>
        <Accordion.Body>
          Detailed description of the second overworld enhancement.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Enhancement 3</Accordion.Header>
        <Accordion.Body>
          Detailed description of the third overworld enhancement.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </>
);

const NetherEnhancementsSection: React.FC = () => (
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
  </>
);

const EndEnhancementsSection: React.FC = () => (
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
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Enhancement 1</Accordion.Header>
        <Accordion.Body>
          Detailed description of the first end enhancement.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Enhancement 2</Accordion.Header>
        <Accordion.Body>
          Detailed description of the second end enhancement.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Enhancement 3</Accordion.Header>
        <Accordion.Body>
          Detailed description of the third end enhancement.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </>
);

const SupportSection: React.FC = () => (
  <Container>
    <h2>Support</h2>
    <p>
      I am passionate about creating unique Minecraft experiences and developing indie games. Your support helps me continue working on these projects and bring new content to the community.
    </p>
    <Button variant="primary" href="https://www.paypal.com/donate/?business=C9CAJFYWQXR9C&no_recurring=0&item_name=Support+me+and+my+projects%21&currency_code=USD" target="_blank" rel="noopener noreferrer">
      Donate via PayPal
    </Button>
  </Container>
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
