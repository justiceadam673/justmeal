import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className='flex justify-center items-center h-20 mt-5 bg-gray-800 text-white p-4'>
        <p className='text-center'>© 2023 Meal App. All rights reserved.</p>
        <div className='flex space-x-4 ml-4'>
          <a href='/' className='hover:text-gray-400'>
            Privacy Policy
          </a>
          <a href='/' className='hover:text-gray-400'>
            Terms of Service
          </a>
          <a href='/' className='hover:text-gray-400'>
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
