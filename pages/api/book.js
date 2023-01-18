import  { NextApiRequest, NextApiResponse } from 'next'

import {prisma} from '../../lib/prisma' ;


export default async function  createBookHandler(
  req,
  res
) {
  const { method } = req
  
  const bookData = req.body

  switch (method) {
    case 'POST':
        const createdBook = await prisma.books.create({data:bookData})
        res.status(200).json(createdBook);
      break
      case 'PUT':
        const { bookId,data } = bookData;
        const updatedBook = await prisma.books.update({
          where : {
            id : bookId
          },
          data
        })
        res.status(200).json(updatedBook);
      break
    default:
      res.setHeader('Allow', ['POST','GET','PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}