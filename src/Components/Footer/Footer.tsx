import React from 'react';

function Footer():React.ReactNode{
  return (
  <footer className="bg-black rounded-lg shadow m-4 dark:bg-gray-800 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-white sm:text-center dark:text-white">© 2023 Steam All Rights Reserved. </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline md:mr-6">Contact</a>
        </li>
    </ul>
</footer>
  )
}

export default Footer;