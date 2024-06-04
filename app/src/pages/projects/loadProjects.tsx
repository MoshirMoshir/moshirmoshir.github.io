import matter from 'front-matter';
import { marked } from 'marked';

interface Project {
  title: string;
  description: string;
  date: string;
  featured: boolean;
  content: string;
}

export const loadProject = async (markdown: string): Promise<Project> => {
  const { attributes, body } = matter(markdown) as { attributes: any, body: string };
  const content = await marked(body);

  return {
    title: attributes.title as string,
    description: attributes.description as string,
    date: attributes.date as string,
    featured: attributes.featured as boolean,
    content: content,
  };
};
