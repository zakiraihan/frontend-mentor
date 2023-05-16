import { INavbarItem } from '@/interface/intro-section-dropdown-nav';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Button from './Button';
import NavbarItem from './NavbarItem';

function Navbar() {
  const [navbarItems, setNavbarItems] = useState<Array<INavbarItem>>([]);
  const [showNavbarItems, setShowNavbarItems] = useState(false);
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState('');

  function navbarBackgroundOnScroll() {
    if (window.scrollY > 66) {
      setNavbarBackgroundColor('bg-isdn-almost-white bg-opacity-50');
    }
    else {
      setNavbarBackgroundColor('');
    }
  }

  useEffect(() => {
    setNavbarItems(navbarItemList);
    window.addEventListener('scroll', navbarBackgroundOnScroll);
    
    return () => {
      window.removeEventListener('scroll', navbarBackgroundOnScroll)
    }
  }, [])

  function onClickNavbarItem(item: INavbarItem) {
    setNavbarItems((prevState) => (
      prevState.map((prevItem, index) => {
        if (prevItem.text === item.text) {
          return {
            ...prevItem,
            isActive: !prevItem.isActive
          };
        }
        return {
          ...prevItem,
          isActive: false
        };
      })
    ))
  }

  function onClickNavbarMenu(showNavbarItems: boolean) {
    setShowNavbarItems(showNavbarItems)
  }

  return (
    <div className={`fixed w-full pt-5 pb-5 px-5 md:px-8 md:pt-8 flex items-center justify-between ${navbarBackgroundColor}`}>
      <div className='flex w-auto items-start'>
        <div className='w-24'>
          <Image
            className='object-scale-down w-full h-auto' 
            src="/assets/intro-section-dropdown-nav/images/logo.svg"
            alt='logo'
            width={0}
            height={0}
            sizes='100%'
          />
        </div>
        <div className='hidden md:flex space-x-8 ml-12'>
          {navbarItems.map((navbarItem: INavbarItem, index) => (
            <NavbarItem item={navbarItem} onClick={onClickNavbarItem} />
          ))}
        </div>
      </div>

      <div className='hidden md:flex items-center space-x-10'>
        <div className='text-isdn-medium-gray hover:text-isdn-almost-black cursor-pointer select-none'>
          Login
        </div>
        <Button type='border' text='Register' />
      </div>

      <div className='w-10 md:hidden' onClick={() => onClickNavbarMenu(true)}>
        <Image
          className='object-scale-down w-full h-auto' 
          src="/assets/intro-section-dropdown-nav/images/icon-menu.svg"
          alt='logo'
          width={0}
          height={0}
          sizes='100%'
        />
      </div>

      {showNavbarItems &&
        <div 
          className='md:hidden fixed w-screen min-h-screen h-0 top-0 left-0 bg-[rgba(0,0,0,0.7)] flex flex-row-reverse'
          onClick={() => onClickNavbarMenu(false)}
        >
          <div className='w-3/5 min-h-screen h-auto bg-white pt-3' onClick={(e) => e.stopPropagation()}>
            <div className='absolute right-5 w-10  md:hidden ' onClick={() => onClickNavbarMenu(false)}>
              <Image
                className='object-scale-down w-full h-auto' 
                src="/assets/intro-section-dropdown-nav/images/icon-close-menu.svg"
                alt='logo'
                width={0}
                height={0}
                sizes='100%'
              />
            </div>
            
            <div className='pt-14 px-7 space-y-5'>
              {navbarItems.map((navbarItem: INavbarItem, index) => (
                <NavbarItem item={navbarItem} onClick={onClickNavbarItem} />
              ))}
            </div>

            <div className='w-full flex flex-col items-center mt-10'>
              <div className='text-isdn-medium-gray hover:text-isdn-almost-black cursor-pointer select-none mb-5'>
                Login
              </div>
              <Button type='border' text='Register' className='w-9/12' />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar

const navbarItemList = [
  {
    text: 'Features',
    isActive: false,
    childs: [
      {
        text: 'Todo List',
        icon: '/assets/intro-section-dropdown-nav/images/icon-todo.svg'
      },
      {
        text: 'Calendar',
        icon: '/assets/intro-section-dropdown-nav/images/icon-calendar.svg'
      },
      {
        text: 'Reminders',
        icon: '/assets/intro-section-dropdown-nav/images/icon-reminders.svg'
      },
      {
        text: 'Planning',
        icon: '/assets/intro-section-dropdown-nav/images/icon-planning.svg'
      }
    ]
  },
  {
    text: 'Company',
    isActive: false,
    childs: [
      { text: 'History' },
      { text: 'Our Team' },
      { text: 'Blog' }
    ]
  },
  { 
    text: 'Careers',
    href: '#',
    isActive: false,
  },
  { 
    text: 'About',
    href: '#',
    isActive: false, 
  }
] satisfies Array<INavbarItem>;

