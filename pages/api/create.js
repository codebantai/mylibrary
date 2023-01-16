import {prisma} from '../../lib/prisma' ;
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req,res) {
    const { role } = req.body;
    console.log(role)
    try{
        await prisma.roles.create({
            data:{
                name:role
            }
        })
        res.status(200).json({message:'Role created'})
    }catch(err){
        console.log(err);
        res.status(501).json({message:'Failed to create role'})
    }
}