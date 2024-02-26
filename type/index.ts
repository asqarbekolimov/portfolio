export interface ChildProps {
  children: React.ReactNode;
}

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
  index?: number;
}

export interface MenuItemsProps {
  id: string;
  title: string;
  path: string;
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  demo: string;
  createdAt: string;
  content: {
    html: string;
  };
  language: Languages;
  slug: string;
  image: {
    url: string;
  };
  category: ICategory;
  tags: ITags[];
}
export interface ITags extends ICategory {}
export interface ICategory {
  name: string;
  description: string;
  slug: string;
}

enum Languages {
  "en",
  "ru",
  "uz",
}
