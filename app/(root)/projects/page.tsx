import React from 'react';
import ProjectsPageComponent from '@/page-components/projects-page/projects-page';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Projects Page',
  description: 'Projects I did while learning to program.',
  openGraph: {
    title: 'Projects | Asqarbek',
    description: 'Projects I did while learning to program.',
    url: 'https://asqarbekdev.uz',
    siteName: 'Portfolio website',
    emails: 'info@asqarbekdev.uz',

    images: [
      {
        url: 'https://asqarbekdev.uz/dev.png',
        width: 1250,
        height: 800,
      },
    ],
    locale: 'uz_UZ',
    type: 'website',
    countryName: 'Uzbekistan',
  },
};

const Page = () => {
  return <ProjectsPageComponent />;
};

export default Page;
