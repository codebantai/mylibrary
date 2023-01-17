import React from "react";
import CreatableSelect from "react-select/creatable";

export default function Admin() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-tr from-[#44A08D] to-[#093637]">
      <div className="bg-gray-100 p-20 w-1/2 rounded-md shadow-md">
        <div className="mb-10 flex justify-between items-center">
          <h2 className="text-3xl">Add New Book</h2>
          <button className="text-[#0b3838] border border-[#0b3838] hover:bg-[#0e5152] hover:text-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5">
            Listings
          </button>
        </div>
        <form>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0b3838] focus:outline-none focus:ring-0 focus:border-[#0b3838] peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0b3838] peer-focus:dark:text-[#0b3838] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Book name
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0b3838] focus:outline-none focus:ring-0 focus:border-[#0b3838] peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0b3838] peer-focus:dark:text-[#0b3838] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Book author
            </label>
          </div>
          <div className="relative z-0 w-full mb-12 group">
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0b3838] focus:outline-none focus:ring-0 focus:border-[#0b3838] peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0b3838] peer-focus:dark:text-[#0b3838] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Rack number
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <CreatableSelect isClearable options={options} />
            <label
              for="floating_email"
              className=" absolute text-xl text-gray-500 dark:text-gray-400 transform -translate-y-6 scale-75 -top-1 -z-10 origin-[0]"
            >
              Select category
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-[#0b3838] hover:bg-[#0e5152] font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
