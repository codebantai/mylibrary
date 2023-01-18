import React from 'react'
import Admin from "@/components/Admin";
import { createBook, getBooks, getCategories } from '@/services/books.service'

export default function admin({categoriesData}) {
  return (
    <Admin categoriesData={categoriesData}/>
  )
}

export async function getServerSideProps({ req: { cookies ,headers}, resolvedUrl }) {

  const categoriesResponse = await getCategories();
  
  if (categoriesResponse?.status) {
    return { props: { categoriesData: categoriesResponse.data.map(category => Object.assign({}, { label: category.name, value: category.id })) } }
  } else {
    return { props: {} }
  }
}
