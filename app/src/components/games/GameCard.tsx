import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReactMarkdown from 'react-markdown';
import './GameCard.css'; // Import the custom CSS

interface GameCardProps {
  title: string;
  description: string;
  image?: string; // Make image optional
  playLink?: string;
  aboutLink?: string;
  date: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, image, playLink, aboutLink, date }) => {
  const [imgError, setImgError] = useState<boolean>(false);

  useEffect(() => {
    // Reset image error state when the image prop changes
    setImgError(false);
  }, [image]);

  // Function to format the date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <Card className="h-100" style={{ width: '20rem', marginBottom: '1rem' }}>
      {image && !imgError && (
        <Card.Img
          variant="top"
          src={image}
          alt=""
          onError={() => setImgError(true)} // Hide the image on error
          className="img-rounded" // custom css class
        />
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{formatDate(date)}</Card.Subtitle>
        <Card.Text as="div" className="text-start">
          <ReactMarkdown>{description}</ReactMarkdown>
        </Card.Text>
        {playLink && (
          <Button variant="primary" href={playLink} target="_blank" className="mt-auto">Play Now</Button>
        )}
        {aboutLink && (
          <Button variant="primary" href={aboutLink} target="_blank" className="mt-2">Learn More</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default GameCard;
