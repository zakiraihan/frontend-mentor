import { INavbarItem } from '@/interface/intro-section-dropdown-nav'
import Image from 'next/image';
import React from 'react'

function NavbarItem({ item, onClick }: NavbarItemProps) {
  return (
    <div key={'navbarItem: ' + item.text} className={`flex flex-col justify-center relative ${item.isActive ? 'text-isdn-almost-black' : 'text-isdn-medium-gray'} hover:text-isdn-almost-black cursor-pointer`} onClick={() => onClick(item)}>
      <div className='flex items-center'>
        <p className='select-none'>{ item.text }</p>
        
        {item.childs?.length &&
          <div className='w-7'>
            {item.isActive ?
              <Image
                className='object-scale-down w-full h-auto' 
                src="/assets/intro-section-dropdown-nav/images/icon-arrow-up.svg"
                alt='logo'
                width={0}
                height={0}
                sizes='100%'
              /> :
              <Image
                className='object-scale-down w-full h-auto' 
                src="/assets/intro-section-dropdown-nav/images/icon-arrow-down.svg"
                alt='logo'
                width={0}
                height={0}
                sizes='100%'
              />
            }
          </div>
        }
      </div>
      
      {item.childs?.length && item.isActive &&
        <>
        <div className='-z-10 hidden md:flex fixed w-screen h-screen top-0 left-0 cursor-default md:bg-transparent'>

        </div>
        <div className='md:absolute rounded bg-white md:shadow-custom-black w-auto h-auto top-10 left-0 px-2 py-5 space-y-1'>
          {item.childs.map((child) => (
            <div 
              key={'navItemChild: ' + child.text} 
              className='flex items-center pl-3 pr-5 py-1 hover:bg-isdn-medium-gray hover:bg-opacity-20 hover:rounded-lg'
              onClick={(e) => e.stopPropagation()}
            >
              {child.icon &&
                <div className='w-7 mr-2'>
                  <Image
                    className='object-scale-down w-full h-auto' 
                    src={child.icon}
                    alt='logo'
                    width={0}
                    height={0}
                    sizes='100%'
                  />
                </div>
              }
              <p className='text-isdn-medium-gray whitespace-nowrap'>{ child.text }</p>
            </div>
          ))}
        </div>
        </>
      }
    </div>
  )
}

export default NavbarItem

interface NavbarItemProps {
  item: INavbarItem;
  onClick: (item: INavbarItem) => any;
}