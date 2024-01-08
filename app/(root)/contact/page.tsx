import React from 'react';
import ContactPageComponent from '@/page-components/contact-page/contact-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Proposal, application and developer contact.',
  openGraph: {
    title: 'Contact | Asqarbek',
    description: 'Proposal, application and developer contact.',
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

const ContactPage = () => {
  return <ContactPageComponent />;
};

export default ContactPage;
