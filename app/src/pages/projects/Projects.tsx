import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import ProjectCarouselItem from '@components/projects/ProjectCarouselItem';
import ProjectBubbleTank from '@components/projects/ProjectBubbleTank';
import ProjectModal from '@components/projects/ProjectModal';
import loadProjects, { Project } from './loadProjects';
import './Projects.css'; // Import the custom CSS

const Projects: React.FC = () => {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [show, setShow] = useState(false);
  const [currentProject, setCurrentProject] = useState<{ title: string; description: string } | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await loadProjects();
      setProjectsData(projects);
    };

    fetchProjects();
  }, []);

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
