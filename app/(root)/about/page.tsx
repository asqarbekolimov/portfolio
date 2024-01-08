import React from 'react';
import AboutPageComponents from '@/page-components/about-page/about-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About how I got into programming.',
};

const AboutPage = () => {
  return <AboutPageComponents />;
};

export default AboutPage;
