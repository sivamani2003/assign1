import React from 'react'
import Sidebar from './Sidebar'
import RepositoryList from './RepositoryList'
const Home = () => {
  return (
      <div className="flex flex-col md:flex-row">
      {/* Sidebar component */}
      <Sidebar />

      {/* Repository List: Appears alongside sidebar on larger screens and below it on smaller screens */}
      <main className="flex-1 p-6 bg-gray-100">
        <RepositoryList />
      </main>
    </div>
  )
}

export default Home
