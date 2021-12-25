import React from "react";
import { Menu, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-4 bg-gray-600 shadow-lg  ">
        <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex  lg:w-auto lg:static lg:block justify-start gap-2">
              <div className="flex gap-3 lg:space-x-56 "> 
              <a
              className="text-lg items-center font-bold leading-relaxed inline-block  whitespace-nowrap  text-white">
             <Link to='/'>MyDiary</Link> 
            </a>
            <div className=" "><form action="" class="flex justify-center bg-white border-1 overflow-hidden rounded-sm  ">
    <input type="search" placeholder="Search" class="block rounded-md border-0 focus:outline-none focus:ring-0 focus:border-gray-800 w-48 "></input>
    <button className="rounded-full bg-gray-400 w-8 h-8 pl-1 pt-1 flex justify-items-center" type="submit">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="h-6 w-6" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"/>
</svg>
    </button>
</form></div>
            
</div>
           
            <button
              className="bg-gray-400 text-white cursor-pointer text-xl leading-none px-2 py-0 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="h-6 w-6" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
</svg>
                  
              
            </button>
          </div>
          <div
            className={ 
              "flex justify-start lg:flex flex-grow " +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:space-x-5">
              <li className="nav-item">
               <Menu as="div" className="relative inline-block text-left"><Menu.Button className="inline-flex justify-center w-full  px-6 py-2 text-sm font-medium text-gray-200">
          <button><Link to='/mynotes'>MyPages</Link> </button>
        </Menu.Button></Menu>
                  
                
              </li>
              <li className="nav-item">
              <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full   px-6 py-2 text-sm font-medium text-gray-200">
          Pratyush Mahapatra
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  My Profile
                </a>
              )}
            </Menu.Item>
            
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Log out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}