import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const { method } = req;

    if(method === 'GET'){
        const users = await prisma.user.findMany();

        return res.status(200).json{
            data:users
    }
    return res.status(404).json({ message: 'error'})
   

    }else if(method === 'POST'){
        const {name} = req.body;
        const users = await prisma.user.create({
            data: {
                name
            }
        });

        return res.status(401).json({ data: users})
    }
}