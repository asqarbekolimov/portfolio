'use client';
import React from 'react';
import TextForm from '@/components/shared/form/text-form';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const ContactPageComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="flex w-full flex-col justify-between gap-8 pb-10 md:flex-row">
      <Fade direction="down" triggerOnce={true}>
        <div className="flex flex-col justify-between">
          <div className="mb-8">
            <h2 className="text-5xl font-bold">
              {t('contact_me', { ns: 'index' })}
            </h2>
            <p className="mt-5 max-w-sm text-base tracking-wider text-slate-400">
              {t('fill_up', { ns: 'index' })}
            </p>
          </div>
          <div className="space-y-4">
            <Link
              className="flex items-center gap-5 rounded-md border-2  px-5 py-4 shadow transition-all duration-200 hover:border-blue-700 hover:bg-blue-500/10"
              href="tel:+998500088708"
            >
              <HiPhone className="text-blue-600" size={25} />{' '}
              <span className="text-slate-400">+998500088708</span>
            </Link>
            <Link
              className="flex items-center gap-5 rounded-md border-2 px-5 py-4 shadow hover:border-blue-700 hover:bg-blue-500/10"
              href="mailto:info@asqarbekdev.uz"
            >
              <HiMail className="text-blue-600" size={25} />{' '}
              <span className="text-slate-400">info@asqarbekdev.uz</span>
            </Link>
            <Link
              className="flex items-center gap-5 rounded-md border-2 px-5 py-4 shadow hover:border-blue-700 hover:bg-blue-500/10"
              href="https://maps.app.goo.gl/q5QPvzTHa422ZuD58"
              target="_blank"
            >
              <HiLocationMarker className="text-blue-600" size={25} />{' '}
              <span className="text-slate-400">Navoi Uzbekistan </span>
            </Link>
          </div>
        </div>
      </Fade>

      <TextForm />
    </section>
  );
};

export default ContactPageComponent;
