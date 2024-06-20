import MinecraftSMP from './project_pages/MinecraftSMP';

export interface Project {
  id: number;
  title: string;
  description: string;
  content: string;
  icon: string;
  image: string;
  banner: string;
  date: string;
  priority: number;
  featured: boolean;
}

interface ProjectMetadata {
  title: string;
  description: string;
  date: string;
  featured: boolean;
}

const loadProjects = async (): Promise<Project[]> => {
  const projectComponents = [
    MinecraftSMP,
    // Add other project imports here
  ];

  const projects: Project[] = projectComponents.map((Component, index) => {
    const metadata: ProjectMetadata | undefined = (Component as any).metadata;

    if (!metadata) {
      return null; // Handle the case where metadata is not defined
    }

    return {
      id: index + 1, // Assign a unique ID
      ...metadata,
      content: `<h1>${metadata.title}</h1><p>${metadata.description}</p>`, // Example content handling
    };
  }).filter((project): project is Project => project !== null);

  return projects;
};

export default loadProjects;
