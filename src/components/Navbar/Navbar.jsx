import {useState} from 'react'
export default function Navbar() {
  const [openNav, setopenNav] = useState(false)
  return (
    <nav class="px-2 py-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div class="container flex flex-col md:flex-row flex-wrap justify-between items-center mx-auto">
        <div className="w-full flex justify-between md:w-auto">
        <a href="/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="mr-3 h-6 sm:h-10"
            alt="Flowbite Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            RentEasy
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          onClick={() => setopenNav(!openNav)}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        </div>
        <div className={`${openNav ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="mobile-menu">
          <ul class="flex flex-col px-4 py-2 mt-4 gap-2 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent text-lg md:relative md:top-1/2 md:-translate-y-1/2"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg md:relative md:top-1/2 md:-translate-y-1/2"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg md:relative md:top-1/2 md:-translate-y-1/2"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg md:relative md:top-1/2 md:-translate-y-1/2"
              >
                Contact
              </a>
            </li>
            <li>
              <button
                type="button"
                class="w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Sign Up
              </button>
            </li>
            <li>
              <button
                type="button"
                class="w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-md leading-tight uppercase rounded hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
