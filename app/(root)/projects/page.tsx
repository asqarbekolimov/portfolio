import React from 'react';
import ProjectsPageComponent from '@/page-components/projects-page/projects-page';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Projects Page',
  description: 'Projects I did while learning to program.',
};

const Page = () => {
  return <ProjectsPageComponent />;
};

export default Page;
