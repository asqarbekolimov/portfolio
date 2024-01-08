import React from 'react';
import AboutPageComponents from '@/page-components/about-page/about-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About how I got into programming.',
  openGraph: {
    title: 'About | Asqarbek',
    description: 'About how I got into programming.',
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

const AboutPage = () => {
  return <AboutPageComponents />;
};

export default AboutPage;
