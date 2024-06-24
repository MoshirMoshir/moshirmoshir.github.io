import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HowToJoinTab: React.FC = () => (
  <Container className="transparent-container">
    <h2>How to Join</h2>
    <p>To join my Minecraft SMP, use the following addresses below:</p>
    <p>
      Java Address: <Button variant="link" onClick={() => navigator.clipboard.writeText('smp.manasys.org')}>smp.minecraft.org</Button><br />
      Bedrock Address: <Button variant="link" onClick={() => navigator.clipboard.writeText('smb.manasys.org')}>smb.minecraft.org</Button>
      <br />
      <em className='note'>(Java account required, even on Bedrock)</em>
    </p>
  </Container>
);

export default HowToJoinTab;
