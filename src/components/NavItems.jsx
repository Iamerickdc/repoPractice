import React from 'react'
import {  Link } from 'react-router-dom'
// import {
//     RxHome,
//     RxInfoCircled,
//     HiOutlineMailOpen,
//     FaQuestionCircle
// } from "react-icons/io5";


const NavItems = () => {
const NavLinks = [
    { name: "Home", Path: "/" },
    { name: "About", Path: "/about" },
    { name: "Contact", Path: "/contact"},
    { name: "FAQ", Path: "/faq"   }

  ];
  return (
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
        {NavLinks.map((links, index) => (
          <li
            key={index}
            className="mr-10 hover:text-gray-900 flex items-center space-x-10"
          >
            <Link to={links.Path} className="flex items-center">
              {links.icon} {/* Display the icon */}
              <span className="ml-2">{links.name}</span>{" "}
              {/* Display the link name */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;