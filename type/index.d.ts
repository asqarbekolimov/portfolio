export interface ProjectsProps {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
}

export interface ProjectProps {
  project: ProjectsProps;
  index: number;
}
