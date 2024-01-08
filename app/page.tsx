import HomePageComponent from '@/page-components/home-page/home-page';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Home',
  description: 'A short story about the world of me programming',
};

export default function HomePage() {
  return <HomePageComponent />;
}
