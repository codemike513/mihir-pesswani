import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => (
  <header className="bg-white dark:bg-[#111827] sm:h-13 sm:sticky top-0">
    <div className="mx-auto">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          <img src="/logo.png" className="w-48" alt="MP" />
          {/* <div className="sm:ml-8 flex space-x-5 text-center">
            <Link href="/">
              <a className="text-gray-500 hover:text-pink-700">Home</a>
            </Link>
            <Link href="/about-us">
              <a className="text-gray-500 hover:text-pink-700">About us</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-500 hover:text-pink-700">Blog</a>
            </Link>
          </div> */}
        </div>
        {/* <Link href="/admin" prefetch={false}>
          <a className="py-2 px-5 rounded text-white font-medium bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg transition duration-200">
            Edit content
          </a>
        </Link> */}
      </div>
    </div>
  </header>
)

export default Header
