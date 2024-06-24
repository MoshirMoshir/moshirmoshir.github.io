import React from 'react';
import { Container, Button } from 'react-bootstrap';

const SupportTab: React.FC = () => (
  <Container className="transparent-container">
    <h2>Support</h2>
    <p>
      Support me and the projects I work on!
      <br />
      I am passionate about creating applications, software,and games.
      <br />
      Your support directly contributes to maintaining the server for the SMP, as well as helps me continue working on my projects and create new content to share with the community!
    </p>
    <Button variant="primary" href="https://www.paypal.com/donate/?business=C9CAJFYWQXR9C&no_recurring=0&item_name=Support+me+and+my+projects%21&currency_code=USD" target="_blank" rel="noopener noreferrer">
      Donate via PayPal
    </Button>
  </Container>
);

export default SupportTab;
