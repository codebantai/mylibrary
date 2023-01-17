import  { NextApiRequest, NextApiResponse } from 'next'

import {prisma} from '../../lib/prisma' ;


export default async function  categoriesHandler(
  req,
  res
) {
  const { method} = req

  switch (method) {
    case 'GET':
        const categoriesResult = await prisma.categories.findMany()
        res.status(200).json(categoriesResult);
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}