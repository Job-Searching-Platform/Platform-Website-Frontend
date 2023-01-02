import { useState } from "react"

const Navbar = () => {
    const [getToggleProfile, setToggleProfile] = useState(false);
    const [getToggleMenu, setToggleMenu] = useState(false);
    console.log(getToggleProfile)
    console.log(getToggleMenu)
  return (
    <div id="page-container" class="flex flex-col mx-auto w-full  bg-gray-100">
    {/* <!-- Page Header --> */}
    <header id="page-header" class="flex flex-none items-center bg-white shadow-sm z-1">
      <div class="container xl:max-w-7xl mx-auto px-4 lg:px-8">
        <div class="flex justify-between py-4">
          {/* <!-- Left Section --> */}
          <div class="flex items-center">
            {/* <!-- Logo --> */}
            <a href="/" class="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-700 hover:text-blue-600 active:text-gray-700">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="opacity-90 text-blue-600 transform transition group-hover:scale-110 hi-solid hi-cube-transparent inline-block w-5 h-5"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"></path></svg>
              <span>Company</span>
            </a>
            {/* <!-- END Logo --> */}
          </div>
          {/* <!-- END Left Section --> */}
  
          {/* <!-- Right Section --> */}
          <div class="flex items-center space-x-1 lg:space-x-5">
            {/* <!-- Desktop Navigation --> */}
            <nav class="hidden lg:flex lg:items-center lg:space-x-2">
              <a href="/" class="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded border border-blue-50 bg-blue-50 text-blue-500">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="opacity-50 hi-solid hi-home inline-block w-5 h-5"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                <span>Home</span>
              </a>
              <a href="/" class="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="opacity-50 hi-solid hi-user-circle inline-block w-5 h-5"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                <span>Profile</span>
              </a>
              <a href="/" class="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="opacity-50 hi-solid hi-briefcase inline-block w-5 h-5"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                <span>Projects</span>
              </a>
              <a href="/" class="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="opacity-50 hi-solid hi-cog inline-block w-5 h-5"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                <span>Settings</span>
              </a>
            </nav>
            {/* <!-- END Desktop Navigation --> */}
  
            {/* <!-- User Dropdown --> */}
            <div class="relative inline-block">
              {/* <!-- Dropdown Toggle Button --> */}
              <button
                type="button"
                onClick={() => setToggleProfile(!getToggleProfile)}
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
                id="tk-dropdown-layouts-user"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span>John</span>
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="opacity-50 hi-solid hi-chevron-down inline-block w-5 h-5"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              {/* <!-- END Dropdown Toggle Button -->
  
              <!-- Dropdown -->
              <!-- 
                Visibility
                  Closed        'hidden'
                  Opened        '' (no class)
  
                Show/Hide with transitions
                  enter         'transition ease-out duration-150'
                  enter-start   'transform opacity-0 scale-75'
                  enter-end     'transform opacity-100 scale-100'
                  leave         'transition ease-in duration-100'
                  leave-start   'transform opacity-100 scale-100'
                  leave-end     'transform opacity-0 scale-75'
              --> */}
              {getToggleProfile && (<div role="menu" aria-labelledby="tk-dropdown-with-header-badges" class="absolute right-0 origin-top-right mt-2 w-64 shadow-xl rounded z-1">
                    <div class="bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100">
                    <div class="p-3 flex items-center space-x-3">
                        <img src="https://source.unsplash.com/iFgRcqHznqg/160x160" alt="User Avatar" class="flex-none inline-block w-10 h-10 rounded-full" />
                        <div class="grow text-sm">
                        <a href="/" class="font-semibold text-gray-600 hover:text-gray-500">John Doe</a>
                        <p class="text-gray-500">
                            john.doe@example.com
                        </p>
                        </div>
                    </div>
                    <div class="p-2 space-y-1">
                        <a role="menuitem" href="/" class="flex items-center justify-between space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">
                        <div class="flex-none flex items-center space-x-2">
                            <svg class="hi-solid hi-annotation inline-block w-5 h-5 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>
                            <span>Notifications</span>
                        </div>
                        <div class="font-semibold inline-flex px-2 py-1 leading-4 ml-2 text-sm rounded-full text-emerald-700 bg-emerald-200">3</div>
                        </a>
                        <a role="menuitem" href="/" class="flex items-center justify-between space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">
                        <div class="flex-none flex items-center space-x-2">
                            <svg class="hi-solid hi-inbox inline-block w-5 h-5 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"/></svg>
                            <span>Inbox</span>
                        </div>
                        <div class="font-semibold inline-flex px-2 py-1 leading-4 ml-2 text-sm rounded-full text-emerald-700 bg-emerald-200">5</div>
                        </a>
                    </div>
                    <div class="p-2 space-y-1">
                        <form onsubmit="return false;">
                        <button type="submit" role="menuitem" class="w-full text-left flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">
                            <svg class="hi-solid hi-lock-closed inline-block w-5 h-5 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/></svg>  
                            <span>Sign out</span>
                        </button>
                        </form>
                    </div>
                    </div>
                </div>)}
              {/* <!-- END Dropdown --> */}
            </div>
            {/* <!-- END User Dropdown --> */}
  
            {/* <!-- Toggle Mobile Navigation --> */}
            <div class="lg:hidden">
              <button type="button" onClick={() => setToggleMenu(!getToggleMenu)} class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="hi-solid hi-menu inline-block w-5 h-5"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
            {/* <!-- END Toggle Mobile Navigation --> */}
          </div>
          {/* <!-- END Right Section --> */}
        </div>
  
        {/* <!-- Mobile Navigation -->
        <!-- 
          Visibility
            Closed        'hidden'
            Opened        '' (no class)
        --> */}
        <div class="lg:hidden" >
          {getToggleMenu && (<nav class="flex flex-col space-y-2 py-4 border-t">
            <a href="/" class="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded border border-blue-50 bg-blue-50 text-blue-500">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="opacity-50 hi-solid hi-home inline-block w-5 h-5"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              <span>Home</span>
            </a>
            <a href="/" class="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="opacity-50 hi-solid hi-user-circle inline-block w-5 h-5"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
              <span>Profile</span>
            </a>
            <a href="/" class="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="opacity-50 hi-solid hi-briefcase inline-block w-5 h-5"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
              <span>Projects</span>
            </a>
            <a href="/" class="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="opacity-50 hi-solid hi-cog inline-block w-5 h-5"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
              <span>Settings</span>
            </a>
          </nav>)}
        </div>
        {/* <!-- END Mobile Navigation --> */}
      </div>
    </header>
    {/* {/* <!-- END Page Header --> */}
  
   
  
    
    </div>
  )
}

export default Navbar