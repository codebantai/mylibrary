import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactSelect from "react-select";
import { yupValidator } from 'lib/yup-validator';
import * as yup from 'yup';
import { createBook } from "@/services/books.service";
import { showNotification } from 'hooks/useToaster';
import { useRouter } from "next/router";

export default function Admin({ categoriesData }) {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit, formState: { errors }, setValue, setError, clearErrors, control, getValues, watch, register
  } = useForm({
    resolver: yupValidator(yup.object().shape({
      name: yup.string().required('Name is mandatory!'),
      rack: yup.number('Rack Number should be an integer').required('Rack Number is mandatory!'),
      category: yup.object().required('Category is mandatory!'),
      author: yup.string().required('Author name is mandatory!'),
    }))
  });
  const router = useRouter();

  const handleCreateBook = async (data) => {
    const bookData = {
      ...data,
      available: true,
      categoryId: data.category.value
    }
    delete bookData.category;
    setLoading(true);
    const res = await createBook(bookData);
    setLoading(false)
    if (res.status) {
      showNotification('Successfully added a book',{
        type:'success'
      })
      router.push('/admin/books')
    }else{
      showNotification("Failed to add a book",{
        type:'error'
      })
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-tr from-[#44A08D] to-[#093637]">
      <div className="bg-gray-100 p-20 w-1/2 rounded-md shadow-md">
        <div className="mb-10 flex justify-between items-center">
          <h2 className="text-3xl">Add New Book</h2>
          <button onClick={()=>router.push('/admin/books')} className="text-[#0b3838] border border-[#0b3838] hover:bg-[#0e5152] hover:text-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5">
            Listings
          </button>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("name")}
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0b3838] peer"
            placeholder=""
          />
          <label
            for="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0b3838] peer-focus:dark:text-[#0b3838] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Book name
          </label>
          {errors['name'] && (
            <div className="text-red-800 text-xs mt-1">
              {errors['name'].message}
            </div>
          )}
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("author")}
            type="text"
            name="author"
            id="author"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0b3838] peer"
            placeholder=" "
          />
          <label
            for="author"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0b3838] peer-focus:dark:text-[#0b3838] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Book author
          </label>
          {errors['author'] && (
            <div className="text-red-800 text-xs mt-1">
              {errors['author'].message}
            </div>
          )}
        </div>
        <div className="relative z-0 w-full mb-12 group">
          <input
            {...register("rack")}
            type="number"
            min={1}
            name="rack"
            id="rack"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0b3838] peer"
            placeholder=" "
            required
          />
          <label
            for="rack"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0b3838] peer-focus:dark:text-[#0b3838] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Rack number
          </label>
          {errors['rack'] && (
            <div className="text-red-800 text-xs mt-1">
              {errors['rack'].message}
            </div>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <ReactSelect
            instanceId={`instance-category`}
            id='category'
            name='category'
            onChange={(e) => {
              setValue('category', e);
              clearErrors('category');
            }}
            options={categoriesData} />
          <label
            for="floating_email"
            className=" absolute text-xl text-gray-500 dark:text-gray-400 transform -translate-y-6 scale-75 -top-1 -z-10 origin-[0]"
          >
            Select category
          </label>
          {errors['category'] && (
            <div className="text-red-800 text-xs mt-1">
              {errors['category'].message}
            </div>
          )}
        </div>
        <button
          onClick={handleSubmit(handleCreateBook)}
          type="submit"
          disabled={loading}
          className="text-white flex bg-[#0b3838] hover:bg-[#0e5152] font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Submit
          {loading && <div role="status">
            <svg aria-hidden="true" class="w-5 h-5 ml-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>}
        </button>
      </div>
    </div>
  );
}
