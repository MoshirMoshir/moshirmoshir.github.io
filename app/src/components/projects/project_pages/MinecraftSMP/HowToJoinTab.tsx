import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HowToJoinTab: React.FC = () => (
  <Container className="transparent-container">
    <h2>How to Join</h2>
    <p>To join our Minecraft SMP server, follow the instructions below:</p>
    <p>
      Java Address: <Button variant="link" onClick={() => navigator.clipboard.writeText('smp.minecraft.org')}>smp.minecraft.org</Button><br />
      Bedrock Address: <Button variant="link" onClick={() => navigator.clipboard.writeText('smb.minecraft.org')}>smb.minecraft.org</Button>
    </p>
  </Container>
);

export default HowToJoinTab;
