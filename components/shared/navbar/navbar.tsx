'use client';

import { usePathname } from 'next/navigation';
import { DarkMode } from './dark-mode/dark-mode';
import { FaDev } from 'react-icons/fa';
import Link from 'next/link';
import { menuItems } from '@/constants';
import { Button } from '@/components/ui/button';
import { Open_Sans } from 'next/font/google';
import Dropdown from '../dropdown/dropdown';
import { CgMenuRightAlt } from 'react-icons/cg';

const font = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
});
import React from 'react';
import { useEffect, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { Fade } from 'react-awesome-reveal';
import { MenuItemsProps } from '../../../type';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { t } = useTranslation();

  return (
    <div
      className={`${font.className} ${
        scrolled &&
        'sticky top-0 z-40 border-none shadow-md backdrop-blur-lg transition-all duration-200 ease-in-out dark:bg-slate-950/50'
      }  !z-50 flex items-center justify-between border-b bg-transparent px-5 py-2 md:px-6 md:py-5 lg:px-14 lg:py-5`}
    >
      <Fade>
        <Link href={'/'}>
          <FaDev size={50} />
        </Link>
        <div className={'hidden space-x-4 lg:flex'}>
          {menuItems.map((item: MenuItemsProps, idx: number) => (
            <Link href={item.path} key={item.id}>
              <Button variant={'ghost'}>
                <span className="text-[#00b533]">0{idx + 1}.</span>
                <span
                  className={`${
                    pathname === item.path ? '!text-[#00b533]' : ''
                  } font-medium text-slate-400`}
                >
                  {t(item.title, { ns: 'index' })}
                </span>
              </Button>
            </Link>
          ))}
          <Dropdown />
          <DarkMode />
        </div>
      </Fade>

      <Fade className="lg:hidden">
        <div
          onClick={() => setIsOpen((state) => !state)}
          className={` ${
            isOpen && '!block transform  transition-all duration-500'
          } absolute bottom-0 right-0 top-0 z-50 hidden h-screen w-full transform space-x-4 
         bg-white/25 px-3 py-5 shadow-lg backdrop-blur-md transition-all duration-500 dark:bg-slate-900/50`}
        />
        <div
          className={` ${
            isOpen && '!left-0 !block transform transition-all duration-500'
          } absolute -left-full bottom-0 top-0 z-50 h-screen w-full transform space-x-4 
          bg-white px-3 py-5 shadow-lg transition-all duration-500 md:w-80 dark:bg-slate-900`}
        >
          <HiOutlineX
            onClick={() => setIsOpen((state) => !state)}
            className="absolute right-5 top-5 cursor-pointer text-[#00b533]"
            size={40}
          />
          <div className="mt-14 flex flex-col items-stretch justify-center space-y-1 pr-5">
            {menuItems.map((item: MenuItemsProps, idx: number) => (
              <Link
                href={item.path}
                key={item.id}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant={`${pathname === item.path ? 'secondary' : 'ghost'}`}
                  className="flex  w-full justify-start"
                >
                  <div>
                    <span className="text-[#00b533]">0{idx + 1}.</span>
                    <span
                      className={`${
                        pathname === item.path ? '!text-[#00b533]' : ''
                      } font-medium text-slate-400`}
                    >
                      {' '}
                      {t(item.title, { ns: 'index' })}
                    </span>
                  </div>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </Fade>

      <Fade className="block lg:hidden">
        <div className="flex items-center gap-3">
          <Dropdown />
          <DarkMode className="my-2" />
          <Button className="border bg-transparent hover:bg-transparent">
            <CgMenuRightAlt
              onClick={() => setIsOpen((state) => !state)}
              className="block cursor-pointer text-[#00b533] lg:hidden"
              size={30}
            />
          </Button>
        </div>
      </Fade>
    </div>
  );
};

export default Navbar;
