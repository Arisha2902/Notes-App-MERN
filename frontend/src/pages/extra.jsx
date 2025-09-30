import React from 'react'
import { Link } from "react-router";
import { PlusIcon } from 'lucide-react';

const Navbar = () => {
  return (
//    <header className="bg-base-300 border-b border-base-content/10">
//     <div className='mx-auto max-w-6xl px-4 py-6'>
//      <div className="flex items-center justify-between">
//     <h1 className='text-3xl font-bold text-primary font-mono tracking-tight'> ThinkBoard </h1>
//      <div className='flex items-center gap-4'>
//         <Link tp={"/create"} className="btn btn-primary"> 
//         <PlusIcon  className="size-5"/>
//         <span>New Note </span>
//         </Link>
//      </div>
//      </div>
//     </div>
//    </header>


    <>
      {/* //    <header className="bg-base-300 border-b border-base-content/10">
      //     <div className='mx-auto max-w-6xl px-4 py-6'>
      //      <div className="flex items-center justify-between">
      //     <h1 className='text-3xl font-bold text-primary font-mono tracking-tight'> ThinkBoard </h1>
      //      <div className='flex items-center gap-4'>
      //         <Link tp={"/create"} className="btn btn-primary"> 
      //         <PlusIcon  className="size-5"/>
      //         <span>New Note </span>
      //         </Link>
      //      </div>
      //      </div>
      //     </div>
      //    </header> */}
      <div className="navbar bg-base-100 lg:hidden">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <label htmlFor="mobile-drawer" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </label>
        </div>
      </div>

      
      {/* // desktop navbar */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">

          <div className='flex items-center gap-4'>
            <Link tp={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note </span>
            </Link>
          </div>

          {/* link and dropdown */}
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a>Home page</a></li>
              <li>
                <details>
                  <summary>Journal history and report</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li><a>Journal history</a></li>
                    <li><a>Report</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          {/* profile and uska dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
          </button>
        </div>
      </div></>



  )
}

export default Navbar
