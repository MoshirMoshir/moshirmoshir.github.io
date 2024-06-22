import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import ProjectCarouselItem from '@components/projects/ProjectCarouselItem';
import ProjectBubbleTank from '@components/projects/ProjectBubbleTank';
import ProjectModal from '@components/projects/ProjectModal';
import loadProjects, { ProjectMetadata } from './loadProjects';
import './Projects.css'; // Import the custom CSS

const Projects: React.FC = () => {
  const [show, setShow] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectMetadata | null>(null);
  const [projectsData, setProjectsData] = useState<ProjectMetadata[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const projects = await loadProjects();
      setProjectsData(projects);
    };

    fetchData();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (project: ProjectMetadata) => {
    setCurrentProject(project);
    setShow(true);
  };

  const bubbleProperties = projectsData.map(project => ({
    id: project.id!,
    title: project.title || '',
    description: project.description || ''
  }));

  return (
    <Container className="projects-container">
      <h1>Projects</h1>
      <Carousel>
        {projectsData.map((project) => (
          <Carousel.Item key={project.id}>
            <ProjectCarouselItem title={project.title || ''} description={project.description || ''} image={project.image || ''} />
          </Carousel.Item>
        ))}
      </Carousel>

      <ProjectBubbleTank projects={bubbleProperties} onBubbleClick={handleShow} />

      {currentProject && (
        <ProjectModal 
          show={show}
          handleClose={handleClose}
          title={currentProject.title || ''}
          description={currentProject.description || ''}
        />
      )}
    </Container>
  );
};

export default Projects;
