import { useState } from 'react';
import { FaCode, FaHome, FaCloud, FaQuestionCircle, FaPhoneAlt, FaCog, FaBars } from 'react-icons/fa';
import img from '../assets/image.png'
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:flex flex-col w-64 bg-white h-screen shadow-md">
        <div className="px-6 py-4 flex flex-col h-full">
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <img src={img} alt="Logo" className="h-8 w-8" />
            <span>CodeAnt AI</span>
          </h2>

          <nav className="mt-6 flex-1">
            <ul className="space-y-4">
              <li className='bg-[#1570EF] px-2 py-1 rounded-lg'>
                <a href="/" className="flex items-center space-x-3 text-white hover:text-blue-500">
                  <FaHome />
                  <span>Repositories</span>
                </a>
              </li>
              <li className='px-2 py-1 rounded-lg'>
                <a href="/" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                  <FaCode />
                  <span>Ai cloud review</span>
                </a>
              </li>
              <li className='px-2 py-1 rounded-lg'>
                <a href="/" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                  <FaCloud />
                  <span>Cloud Security</span>
                </a>
              </li>
              <li className='px-2 py-1 rounded-lg'>
                <a href="/" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                  <FaQuestionCircle />
                  <span>How to Use</span>
                </a>
              </li>
              <li className='px-2 py-1 rounded-lg'>
                <a href="/" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                  <FaCog />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-auto">
            <ul className="space-y-4">
              <li className='px-2 py-1 rounded-lg'>
                <a href="/" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                  <FaPhoneAlt />
                  <span>Support</span>
                </a>
              </li>
              <li className='px-2 py-1 rounded-lg'>
                <a href="/" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                  <MdLogout />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full bg-white shadow-md">
        <div className="px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <img src={img} alt="Logo" className="h-8 w-8" />
            <span>CodeAnt AI</span>
          </h2>
          <button className="p-3 text-gray-700" onClick={toggleDropdown}>
            <FaBars />
          </button>
        </div>
        <nav className={`px-6 py-4 ${isDropdownOpen ? 'block' : 'hidden'}`}>
          <ul className="space-y-4">
            <li>
              <a href="/" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                <FaCode />
                <span>Repositories</span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                <FaCloud />
                <span>Cloud Security</span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                <FaQuestionCircle />
                <span>How to Use</span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                <FaCog />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                <FaPhoneAlt />
                <span>Support</span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                <MdLogout />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
