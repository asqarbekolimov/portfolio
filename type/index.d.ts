export interface ProjectsProps {
  title: string;
  description: string;
  skills: string;
  link: string;
  img: string;
  repo: string;
}

export interface ProjectProps {
  project: ProjectsProps;
  index: number;
}

export interface MenuItemsProps {
  id: string;
  title: string;
  path: string;
}
