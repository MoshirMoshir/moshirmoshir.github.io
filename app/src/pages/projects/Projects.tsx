import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import ProjectCarouselItem from '@components/projects/ProjectCarouselItem';
import ProjectBubbleTank from '@components/projects/ProjectBubbleTank';
import ProjectModal from '@components/projects/ProjectModal';
import './Projects.css'; // Import the custom CSS

const projectsData = [
  { id: 1, title: 'Project 1', description: 'Description for Project 1', image: '' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2', image: '' },
  { id: 3, title: 'Project 3', description: 'Description for Project 3', image: '' },
];

const Projects: React.FC = () => {
  const [show, setShow] = useState(false);
  const [currentProject, setCurrentProject] = useState<{ title: string; description: string } | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = (project: { title: string; description: string }) => {
    setCurrentProject(project);
    setShow(true);
  };

  return (
    <Container className="projects-container">
      <h1>Projects</h1>
      <Carousel>
        {projectsData.map((project) => (
          <Carousel.Item key={project.id}>
            <ProjectCarouselItem title={project.title} description={project.description} image={project.image} />
          </Carousel.Item>
        ))}
      </Carousel>

      <ProjectBubbleTank projects={projectsData} onBubbleClick={handleShow} />

      {currentProject && (
        <ProjectModal 
          show={show}
          handleClose={handleClose}
          title={currentProject.title}
          description={currentProject.description}
        />
      )}
    </Container>
  );
};

export default Projects;
