import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser= async (req, res) => {
    try {
        const existingUser = await prisma.user.findUnique({
            where: {id: req.body.params.id}
        })
        
        if(!existingUser) {
            const newUser = await prisma.user.create({
                data: req.body.params
            })
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(500).json({msg: `Error: ${error}`})
    }
}

export const updateUser= async (req, res) => {
    
}