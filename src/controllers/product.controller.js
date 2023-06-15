import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct= async (req, res) => {
    try {
        const newProduct = await prisma.product.create({
            data: {
                id: req.body.params.id,
                name: req.body.params.name,
                price: parseInt(req.body.params.price),
                image: req.body.params.image,
                IdCategory: req.body.params.IdCategory
            }
        });
    
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({msg: `Error: ${error}`});
        console.log("Error: ", error);
    }
}

export const getProducts= async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            where: {
                IdCategory: req.query.IdCategory
            }
        });
    
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({msg: `Error: ${error}`})
    }
}

export const updateProduct= async (req, res) => {
    
}

export const deleteProduct= async (req, res) => {
    try {
        
        const productDeleted = await prisma.product.delete({
            where: {
                id: req.query.id
            }
        });
    
        res.status(200).json(productDeleted);
    } catch (error) {
        res.status(500).json({ msg: `Error: ${error}` });
    }
}