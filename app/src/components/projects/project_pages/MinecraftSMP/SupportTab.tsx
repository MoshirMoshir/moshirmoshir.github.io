import React from 'react';
import { Container, Button } from 'react-bootstrap';

const SupportTab: React.FC = () => (
  <Container className="transparent-container">
    <h2>Support</h2>
    <p>
      I am passionate about creating unique Minecraft experiences and developing indie games. Your support helps me continue working on these projects and bring new content to the community.
    </p>
    <Button variant="primary" href="https://www.paypal.com/donate/?business=C9CAJFYWQXR9C&no_recurring=0&item_name=Support+me+and+my+projects%21&currency_code=USD" target="_blank" rel="noopener noreferrer">
      Donate via PayPal
    </Button>
  </Container>
);

export default SupportTab;
