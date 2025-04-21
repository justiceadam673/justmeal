import React from "react";

const Header = () => {
  const navs = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div>
      <header className='flex justify-between items-center bg-gray-800 text-white p-4'>
        <h1 className='text-2xl font-bold'>Meal App</h1>
        <nav className='flex justify-between items-center space-x-4'>
          <ul className='flex space-x-4'>
            {navs.map((nav, index) => (
              <li key={index}>
                <a href={nav.link} className='hover:text-gray-400'>
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
