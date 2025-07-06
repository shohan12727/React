import React from 'react';

const Navbar = () => {

  const navigationItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  }
];


  return (
    <div>
 <nav>
  
    <ul className='flex'>
               {
                        navigationItems.map(element => <li className='mr-10'>
                          <a href={element.path}>{element.name}</a>
                        </li> )
               }
    </ul>
  
 </nav>
    </div>
  );
};

export default Navbar;




     {/* <ul className='flex gap-4 justify-end'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="blog">Blog</a></li>
      </ul> */}