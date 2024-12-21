import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/image2.png";
import img1 from "../assets/image.png";
import img2 from "../assets/image3.png";
import { FaGithub, FaBitbucket, FaGitlab } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";

const Login = () => {
  const navigate = useNavigate();
  const [isSelfHosted, setIsSelfHosted] = useState(false);

  const handleSignIn = () => {
    navigate("/home");
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Hidden for Small Screens */}
      <div className="hidden lg:flex flex-grow relative items-start justify-center">
        {/* Main Content Box */}
        <div className="bg-white p-6 shadow-lg rounded-lg w-3/5 mt-60">
          <h4 className="font-semibold mb-4 text-xl flex justify-start">
            <img src={img1} alt="Logo" className="mr-2 w-6" />
            AI for Code Analysis & Optimization
          </h4>
          <hr className="border-[#E6E8F0] my-4" />
          <div className="flex space-x-6 justify-center mt-6">
            <div className="flex flex-col items-center text-center">
              <span className="text-lg font-bold">30+</span>
              <p className="text-gray-500 text-sm" >Supported Languages</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-lg font-bold">10+</span>
              <p className="text-gray-500 text-sm">Team Members</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-lg font-bold">100k+</span>
              <p className="text-gray-500 text-sm">Hours Saved</p>
            </div>
          </div>
        </div>

        {/* Highlighted Stats Box */}
        <div className="absolute bottom-64 w-1/3 mx-auto bg-white px-6 py-4 shadow-lg rounded-lg right-2">
  <div className="relative mb-4 flex justify-between items-center">
    {/* Highlight Circle */}
    <div className="w-12 h-12 bg-[#9D90FA40] rounded-full flex items-center justify-center">
      <img src={img2} alt="Statistics Icon" className="w-8 h-8" />
    </div>

    {/* Number and Up Arrow */}
    <div className="flex items-center">
    <span className="text-[#0049C6] text-xl">&#8593;</span>
      <p className="text-lg text-[#0049C6] font-semibold ml-2">14%</p>
       {/* Up Arrow */}
      
    </div>
  </div>
  <p className="text-xs font-semibold">Issues Fixed</p>
  <p className="text-lg font-semibold">500K+</p>
</div>

        {/* Decorative Image */}
        <img
          src={img}
          alt="Illustration"
          className="absolute bottom-0 left-0"
        />
      </div>

      {/* Right Section */}
      <div className="flex-grow bg-gray-50 p-10 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-10 px-4">
          <div className="text-center mb-6">
          <h1 className="text-2xl mb-10 flex items-center justify-center font-satoshi">
                <img src={img1} alt="Logo" className="mr-2 w-6" />
                CodeAnt AI </h1>


            <h1 className="text-3xl font-bold">Welcome to CodeAnt AI</h1>
          </div>
          <div className="flex justify-center mb-6 font-inter">
            <button
              className={`py-2 px-4 rounded-lg w-48 border ${
                !isSelfHosted
                  ? "bg-blue-600 text-white"
                  : "bg-gray-50 text-gray-700"
              }`}
              onClick={() => setIsSelfHosted(false)}
            >
              SAAS
            </button>
            <button
              className={`py-2 px-4 rounded-lg w-48 border ${
                isSelfHosted
                  ? "bg-blue-600 text-white"
                  : "bg-gray-50 text-gray-700"
              }`}
              onClick={() => setIsSelfHosted(true)}
            >
              Self-Hosted
            </button>
          </div>
          <div className="flex flex-col space-y-4 items-center">
            {!isSelfHosted ? (
              <>
                <button
                  type="button"
                  onClick={handleSignIn}
                  className="py-2 px-4 w-3/4 border flex items-center justify-center rounded-lg"
                >
                  <FaGithub className="mr-2" size={18} />
                  Sign in with GitHub
                </button>
                <button
                  onClick={handleSignIn}
                  className="flex items-center justify-center py-2 rounded-lg w-3/4 border"
                >
                  <FaBitbucket className="mr-2" size={18} color="blue" />
                  Sign in with Bitbucket
                </button>
                <button
                  onClick={handleSignIn}
                  className="flex items-center justify-center py-2 rounded-lg w-3/4 border"
                >
                  <VscAzureDevops className="mr-2" size={18} color="blue" />
                  Sign in with Azure DevOps
                </button>
                <button
                  onClick={handleSignIn}
                  className="flex items-center justify-center py-2 rounded-lg w-3/4 border"
                >
                  <FaGitlab className="mr-2" size={18} color="#FC6D26" />
                  Sign in with GitLab
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSignIn}
                  className="flex items-center justify-center py-2 rounded-lg w-3/4 border"
                >
                  <FaGitlab className="mr-2" size={18} color="#FC6D26" />
                  Sign in with GitLab
                </button>
                <button
                  onClick={handleSignIn}
                  className="flex items-center justify-center py-2 rounded-lg w-3/4 border"
                >
                  SSO
                </button>
              </>
            )}
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            By logging in, you agree to our{" "}
            <a href="/privacy-policy" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;