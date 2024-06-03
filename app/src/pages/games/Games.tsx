import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import GameCard from '@components/games/GameCard';
import GameCardPlaceholder from '@components/games/GameCardPlaceholder';
import gamesData from '@assets/Games.json';

interface Game {
  title: string;
  description: string;
  image: string;
  playLink: string;
  aboutLink: string;
  date: string;
  priority: number;
}

const Games: React.FC = () => {
  const [games, setGames] = useState<Game[] | null>(null);
  const [sortOrder, setSortOrder] = useState<string>('featured'); // Set default sorting to featured

  useEffect(() => {
    // Simulate an API call to fetch game data
    setTimeout(() => {
      setGames(gamesData);
    }, 750);
  }, []);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const sortedGames = games?.sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOrder === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return a.priority - b.priority; // Lower number means higher priority
    }
  });

  return (
    <Container>
      <h1>Games</h1>
      <Form.Select aria-label="Sort games" value={sortOrder} onChange={handleSortChange} className="mb-3">
        <option value="featured">Featured</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </Form.Select>
      <Row className="g-4">
        {sortedGames ? (
          sortedGames.map((game, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <GameCard title={game.title} date={game.date} description={game.description} image={game.image} playLink={game.playLink} aboutLink={game.aboutLink} />
            </Col>
          ))
        ) : (
          <>
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <GameCardPlaceholder />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <GameCardPlaceholder />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <GameCardPlaceholder />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <GameCardPlaceholder />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <GameCardPlaceholder />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <GameCardPlaceholder />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <GameCardPlaceholder />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <GameCardPlaceholder />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <GameCardPlaceholder />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <GameCardPlaceholder />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <GameCardPlaceholder />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <GameCardPlaceholder />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Games;
