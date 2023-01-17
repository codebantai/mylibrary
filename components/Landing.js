import React from "react";

export default function Landing() {
  return (
    <div className="md:px-32 py-8 w-full">
      <h2 className="text-4xl font-medium">Library Management System</h2>

      <div className=" py-9">
        <form className="w-1/2">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
            </div>
            <input
              type="search"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search books"
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
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
                <span className="w-fit px-4 py-2 text-sm font-medium rounded-full border border-green-700 text-green-700 uppercase">Available</span>
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
