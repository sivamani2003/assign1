import React from 'react';
import img from '../assets/image2.png';
import img1 from '../assets/image.png';
import img2 from '../assets/image3.png';
import { FaGithub } from "react-icons/fa6";
import { FaBitbucket } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";

const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Hidden on Small Screens */}
      <div className="hidden lg:flex flex-1 relative items-start justify-center">
        {/* Main Box */}
        <div className="bg-white p-6 shadow-lg rounded-lg w-3/5 mt-60">
          <h4 className="text-2xl font-bold mb-4 text-xl flex justify-start">
            <img src={img1} alt="" className="mr-2 w-6" />
            AI to Detect & Autofix Bad Code
          </h4>
          <hr className="border-[#E6E8F0] my-4" />
          <div className="flex space-x-6 justify-center mt-6">
            <div className="flex flex-col items-center text-center">
              <span className="text-lg font-bold">30+</span>
              <p className="text-gray-500 text-sm">Languages Supported</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-lg font-bold">10+</span>
              <p className="text-gray-500 text-sm">Developers</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-lg font-bold">100k+</span>
              <p className="text-gray-500 text-sm">Hours Saved</p>
            </div>
          </div>
        </div>

        {/* Circle with Image and Stats Box */}
        <div className="absolute bottom-72 w-1/3 mx-auto bg-white px-6 py-4 shadow-lg rounded-lg right-2">
          <div className="relative mb-4 flex justify-start">
            {/* Small Circle with Background Color */}
            <div className="w-12 h-12 bg-[#9D90FA40] rounded-full flex items-center justify-center">
              <img src={img2} alt="Stat Icon" className="w-8 h-8" />
            </div>
          </div>
          <p className="text-xs font-semibold">Issues fixed</p>
          <p className="text-lg font-semibold">500K+</p>
        </div>

        {/* Bottom Left Image */}
        <img src={img} alt="Login" className="absolute bottom-0 left-0" />
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-gray-50 p-10 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6 px-4">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Welcome to CodeAnt AI</h1>
          </div>
          <div className="flex justify-center mb-6">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md mx-2">SAAS</button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg shadow-md mx-2">Self Hosted</button>
          </div>
          <div className="flex flex-col space-y-4 items-center">
            <button type="button" className="py-2 px-4 w-3/4 border flex items-center justify-center  rounded-lg shadow-md">
            <FaGithub className='mr-2'size={18}/>
              Sign in with GitHub
            </button>
            <button className="flex items-center justify-center  py-2 rounded-lg w-3/4  shadow-md">
            <FaBitbucket className="mr-2" size={18} color="blue" />
              Sign in with Bitbucket
            </button>
            <button className="flex items-center justify-center  py-2 rounded-lg w-3/4 shadow-md">
            <VscAzureDevops className='mr-2' size={18} color='blue'/>
              Sign in with Azure DevOps
            </button>
            <button className="flex items-center justify-center bg-orange-600 text-white py-2 rounded-lg  w-3/4  shadow-md">
              Sign in with GitLab
            </button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">By signing up you agree to the <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
