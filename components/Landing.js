import React from "react";
import ReactSelect from "react-select";

export default function Landing({categories,pagination,setSearch,search,searchCategory,setSearchCategory,setPagination,books}) {
  const style = {
    control: (base) => ({
      ...base,
      boxShadow: "none",
      border:"none",
      shadow:"none",
      width:"200px"
    }),
    
}
  return (
    <div className="md:px-32 py-8 w-full">
      <h2 className="text-4xl font-medium">Library Management System</h2>

      <div className="py-9 flex justify-between items-center ">
        
          <div className="flex w-1/2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
            <ReactSelect
            instanceId="category-select"
            className= "text-gray-900 text-sm bg-gray-50 rounded-l-lg border-r-gray-100 border-r-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            components={{
              IndicatorSeparator: () => null
            }}
            value={searchCategory}
            onChange={(value)=>setSearchCategory(value)}
            placeholder='All Categories'
            styles={style}
            options={categories}
            />
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Search"
                required
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-gray-800 rounded-r-lg border  hover:bg-gray-900  focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
      </div>

      <div className=" overflow-hidden rounded border-b border-gray-200 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
        <table className="min-w-full bg-white table-auto ">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-2/5">Name</th>
              <th className="w-1/5">Author</th>
              <th className="w-1/5">Genre</th>
              <th className="w-1/5">Rack Number</th>
              <th className="">Tag</th>
              {/* <th className="">Action</th> */}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {
              books[1] && books[1].map(book=>(
                <tr key={book.id}>
              <td className="">{book.name}</td>
              <td className="">{book.author}</td>
              <td className="">
                <span className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                {book.category.name}</span></td>
              <td className="">{book.rack}</td>
              <td className="">
                { book.available ? 
                <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Available</span>
                 : <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">Borrowed</span>
                }
              </td>
              {/* <td className="">
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    htmlFor="toggle"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </td> */}
            </tr>
              ))
            }
            
          </tbody>
        </table>
      </div>

      {books && books[0] ? <div className="flex flex-col items-center p-10">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">{pagination.skip + 1}</span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            { (pagination.skip) + pagination.take }
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {books[0]}
          </span>{" "}
          Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <button
            disabled={pagination.skip === 0}
           className="inline-flex items-center px-4 py-2 text-sm font-medium disabled:opacity-80 disabled:cursor-not-allowed text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
           onClick={()=>{
            if(!books) return;
            if(pagination.skip === 0) return
            setPagination({
              skip: pagination.skip - 10,
              take:10
            })
           }}
           >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            Prev
          </button>
          <button
            disabled={pagination.skip + pagination.take >= books[0]}
            className="inline-flex items-center px-4 py-2 text-sm font-medium disabled:opacity-80 disabled:cursor-not-allowed text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
           onClick={()=>{
            if(!books) return;
            if(pagination.skip + pagination.take >= books[0]) return
            setPagination({
              skip: pagination.skip + 10,
              take:10
            })
           }}
           >
            
            Next
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>: <div className="text-center p-10">No books found</div>
      }
    </div>
  );
}
