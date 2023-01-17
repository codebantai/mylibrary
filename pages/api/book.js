import  { NextApiRequest, NextApiResponse } from 'next'

import {prisma} from '../../lib/prisma' ;


export default async function  createBookHandler(
  req,
  res
) {
  const { query, method,body } = req
  
  const bookData = req.body

  switch (method) {
    case 'POST':
        const createdBook = await prisma.books.create({data:bookData})
        res.status(200).json(createdBook);
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}