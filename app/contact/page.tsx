import React from 'react';
import ContactPageComponent from '@/page-components/contact-page/contact-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Proposal, application and developer contact.',
};

const ContactPage = () => {
  return <ContactPageComponent />;
};

export default ContactPage;
