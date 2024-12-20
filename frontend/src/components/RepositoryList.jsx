import { useState } from 'react';
import { LuDatabase } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { LuRefreshCcw } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";

const RepositoryList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const repositories = [
    { name: 'design-system', size: '7320 KB', language: 'React', privacy: 'Public', updated: '1 day ago' },
    { name: 'codeant-ci-app', size: '5871 KB', language: 'JavaScript', privacy: 'Private', updated: '2 days ago' },
    { name: 'analytics-dashboard', size: '4521 KB', language: 'Python', privacy: 'Private', updated: '5 days ago' },
    { name: 'mobile-app', size: '3096 KB', language: 'Swift', privacy: 'Public', updated: '3 days ago' },
    { name: 'e-commerce-platform', size: '6210 KB', language: 'Java', privacy: 'Private', updated: '6 days ago' },
    { name: 'blog-website', size: '1876 KB', language: 'HTML/CSS', privacy: 'Public', updated: '4 days ago' },
    { name: 'social-network', size: '5423 KB', language: 'PHP', privacy: 'Private', updated: '7 days ago' },
  ];

  // Filter repositories based on search query
  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    repo.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
    repo.privacy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Repositories</h2>
            <p className="text-sm text-gray-500">{filteredRepositories.length} toatl repositories</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-2 py-1 text-sm text-grey border rounded-md hover:bg-blue-600 flex items-center sm:px-4 sm:py-2 sm:text-base">
              <LuRefreshCcw className="mr-2" /> Refresh All
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Add Repository
            </button>
          </div>
        </div>
        <div className="mb-4 relative">
          <IoIosSearch className="absolute left-3 top-3" />
          <input 
            type="text"
            placeholder="Search Repositories"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            className="w-full lg:w-1/4 pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {filteredRepositories.map((repo, index) => (
          <div key={index}>
            <div className="py-4 flex justify-between items-center">
              <div className='space-y-1'>
                <h3 className="text-lg font-bold">
                  {repo.name}{" "}
                  <span className="text-xs text-[#175CD3] border bg-[#F0F8FF] px-2 py-1 rounded-lg ml-2">
                    {repo.privacy}
                  </span>
                </h3>
                <p className="text-sm text-gray-500 flex items-center space-x-4">
                  <span className="flex items-center">
                    {repo.language}
                    <GoDotFill className="ml-1 text-[#1570EF]" size={18} />
                  </span>
                  <span className="flex items-center">
                    <LuDatabase className="mr-1" />
                    {repo.size}
                  </span>
                  <span>Updated {repo.updated}</span>
                </p>
              </div>
            </div>
            {index < filteredRepositories.length - 1 && <hr className="border-gray-200" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;
