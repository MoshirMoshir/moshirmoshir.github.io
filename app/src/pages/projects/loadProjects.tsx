import MinecraftSMP from './project_pages/MinecraftSMP';
import ArcadeMap from './project_pages/ArcadeMap';

export interface ProjectMetadata {
  id?: number;
  hash?: string;
  title?: string;
  description?: string;
  content?: string;
  icon?: string;
  image?: string;
  banner?: string;
  date?: string;
  priority?: number;
  featured?: boolean;
}

const loadProjects = async (): Promise<ProjectMetadata[]> => {
  const projectComponents = [
    MinecraftSMP,
    ArcadeMap,
    // Add other project imports here
  ];

  const projects: ProjectMetadata[] = projectComponents.map((Component, index) => {
    const metadata: ProjectMetadata | undefined = (Component as any).metadata;

    const project: ProjectMetadata = {
      id: index + 1, // Assign a unique ID
      hash: metadata?.hash,
      title: metadata?.title,
      description: metadata?.description,
      content: metadata?.content,
      icon: metadata?.icon,
      image: metadata?.image,
      banner: metadata?.banner,
      date: metadata?.date,
      priority: metadata?.priority,
      featured: metadata?.featured,
    };

    return project;
  }).filter((project): project is ProjectMetadata => project.id !== undefined);

  return projects;
};

export default loadProjects;
