'use client';

import { usePathname } from 'next/navigation';
import { DarkMode } from './dark-mode/dark-mode';
import { FaDev } from 'react-icons/fa';
import Link from 'next/link';
import { menuItems } from '@/constants';
import { Button } from '@/components/ui/button';
import { Open_Sans } from 'next/font/google';
import Dropdown from '../dropdown/dropdown';
const font = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
});
import React from 'react';
import { useEffect, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { CgMenuRightAlt } from 'react-icons/cg';
import { Fade } from 'react-awesome-reveal';
import { MenuItemsProps } from '../../../type';

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
                <span className="text-emerald-400">0{idx + 1}.</span>
                <span
                  className={`${
                    pathname === item.path ? '!text-emerald-400' : ''
                  } font-medium text-slate-400`}
                >
                  {' '}
                  {item.title}
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
            isOpen && '!right-0 transform transition-all duration-500'
          } absolute -right-full bottom-0 top-0 z-50 h-screen w-full transform space-x-4 bg-white/50 
          px-3 py-5 shadow-lg backdrop-blur-md transition-all duration-500 lg:hidden dark:bg-slate-900/50`}
        />
        <div
          className={` ${
            isOpen && '!right-0 transform transition-all duration-500'
          } absolute -right-full bottom-0 top-0 z-50 h-screen w-full transform space-x-4 bg-white px-3 
          py-5 shadow-lg transition-all duration-500 md:w-80 lg:hidden dark:bg-slate-900`}
        >
          <Fade>
            <HiOutlineX
              onClick={() => setIsOpen((state) => !state)}
              className="absolute right-5 top-5 cursor-pointer text-emerald-400"
              size={40}
            />
          </Fade>
          <div className="mt-10 flex flex-col items-start  justify-start space-y-1">
            {menuItems.map((item: MenuItemsProps, idx: number) => (
              <Link
                href={item.path}
                key={item.id}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant={'ghost'}
                  className="flex  w-full justify-start"
                >
                  <div>
                    <span className="text-emerald-400">0{idx + 1}.</span>
                    <span
                      className={`${
                        pathname === item.path ? '!text-emerald-400' : ''
                      } font-medium text-slate-400`}
                    >
                      {' '}
                      {item.title}
                    </span>
                  </div>
                </Button>
              </Link>
            ))}
          </div>
          <DarkMode className="my-2" />
          <Dropdown />
        </div>
      </Fade>

      <Fade className="block lg:hidden">
        <CgMenuRightAlt
          onClick={() => setIsOpen((state) => !state)}
          className="block cursor-pointer text-emerald-400 lg:hidden"
          size={30}
        />
      </Fade>
    </div>
  );
};

export default Navbar;
