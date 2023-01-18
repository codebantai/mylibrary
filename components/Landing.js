import { useRouter } from "next/router";
import React from "react";
import ReactSelect from "react-select";

export default function Landing({ categories, pagination, setSearch, search, searchCategory, setSearchCategory, setPagination, books, loading, handleBookAvaliable = () => { }, toggleLoading = false }) {
  const style = {
    control: (base) => ({
      ...base,
      boxShadow: "none",
      border: "none",
      shadow: "none",
      width: "200px",
      "@media only screen and (max-width: 758px)": {
        ...base["@media only screen and (max-width: 758px)"],
        width: '100px'
      },
    }),
  };
  const router = useRouter();

  return (
    <div className="md:px-32 py-8 w-full">
      <h2 className="text-4xl text-center font-medium md:text-left">Library Management System</h2>
      <div className="py-9 flex flex-col md:flex-row space-y-5 md:space-y-0 justify-center md:justify-between items-center ">
        <div className="flex sm:w-3/5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
          <ReactSelect
            instanceId="category-select"
            className="text-gray-900 text-sm bg-gray-50 rounded-l-lg border-r-gray-100 border-r-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            components={{
              IndicatorSeparator: () => null
            }}
            value={searchCategory}
            onChange={(value) => setSearchCategory(value)}
            placeholder='All Categories'
            styles={style}
            options={categories}
          />
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300  "
              placeholder="Search"
              required
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
        {router.pathname.includes('admin') && <button onClick={() => router.push('/admin')} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add +</button>}
      </div>

      <div className=" lg:overflow-hidden overflow-x-scroll rounded border-b border-gray-200 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
        {!loading ? <table className="min-w-full bg-white table-auto ">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-2/5">Name</th>
              <th className="w-1/5">Author</th>
              <th className="w-1/5">Genre</th>
              <th className="w-1/5">Rack Number</th>
              <th className="">Tag</th>
              {router.pathname.includes('/admin') && <th className="">Action</th>}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {
              books[1] && books[1].map((book, index) => (
                <tr key={`book_${book.id}_index`}>
                  <td className="whitespace-nowrap	">{book.name}</td>
                  <td className="whitespace-nowrap	">{book.author}</td>
                  <td className="whitespace-nowrap	">
                    <span className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                      {book.category.name}</span></td>
                  <td className="">{book.rack}</td>
                  <td className="">
                    {book.available ?
                      <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Available</span>
                      : <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">Borrowed</span>
                    }
                  </td>
                  {router.pathname.includes('/admin') && <td className={`${toggleLoading && 'cursor-wait pointer-events-none disabled opacity-30'}`}>

                    <label class="relative inline-flex items-center cursor-pointer">
                      <input
                        name={`book_${book.id}_${index}`}
                        id={`book_${book.id}_${index}`}
                        checked={book.available}
                        onChange={(e) => handleBookAvaliable(e, book.id)}
                        type="checkbox" value="" class="sr-only peer" />
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </td>
                  }
                </tr>
              ))
            }

          </tbody>
        </table> :
          (
            <div class="flex items-center justify-center w-full h-[500px] border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
      </div>

      {books && books[0] ? <div className="flex flex-col items-center p-10">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 ">{pagination.skip + 1}</span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 ">
            {(pagination.skip) + pagination.take}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 ">
            {books[0]}
          </span>{" "}
          Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <button
            disabled={pagination.skip === 0}
            className="inline-flex items-center px-4 py-2 text-sm font-medium disabled:opacity-80 disabled:cursor-not-allowed text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => {
              if (!books) return;
              if (pagination.skip === 0) return
              setPagination({
                skip: pagination.skip - 10,
                take: 10
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
            onClick={() => {
              if (!books) return;
              if (pagination.skip + pagination.take >= books[0]) return
              setPagination({
                skip: pagination.skip + 10,
                take: 10
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
      </div> : <div className="text-center p-10">No books found</div>
      }
    </div>
  );
}
