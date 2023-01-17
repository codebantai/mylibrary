import React from "react";

export default function Landing() {
  return (
    <div className="md:px-32 py-8 w-full">
      <h2 className="text-4xl font-medium">Library Management System</h2>

      <div className="py-9 flex justify-between items-center">
        <form className="w-1/2">
          <div class="flex">
            <label
              for="search-dropdown"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              type="button"
            >
              All categories
              <svg
                ariaHidden="true"
                class="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="dropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                ariaLabelledby="dropdown-button"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Shopping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Images
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Finance
                  </a>
                </li>
              </ul>
            </div>
            <div class="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  ariaHidden="true"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
        <button className="text-white bg-[#0b3838] hover:bg-[#0e5152] font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5">
          Create +
        </button>
      </div>

      <div className="shadow overflow-hidden rounded border-b border-gray-200">
        <table className="min-w-full bg-white table-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-2/5">Name</th>
              <th className="w-1/5">Author</th>
              <th className="w-1/5">Rack Number</th>
              <th className="">Tag</th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="">Lian</td>
              <td className="">Smith</td>
              <td className="">622322662</td>
              <td className="">
                <span className="w-fit px-4 py-2 text-sm font-medium rounded-full border border-green-700 text-green-700 uppercase">
                  Available
                </span>
                {/* <span className="w-fit px-4 py-2 text-sm font-medium rounded-full border border-red-700 text-red-700 uppercase">
                  not Available
                </span> */}
              </td>
              <td className="">
                <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    for="toggle"
                    class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
