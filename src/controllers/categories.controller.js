import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCategory= async (req, res) => {
    try {
        const newCategory = await prisma.category.create({
            data: req.body.params
        });          
        
        res.status(200).json(newCategory)
    } catch (error) {
        res.status(500).json({msg: `Error: ${error}`})
    }
}

export const getCategories= async (req, res) => {
    try {
        const categories = await prisma.category.findMany({
            include: {
                products: true
            },
            where: {
                menuId: req.query.menuId
            }
        });
    
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({msg: `Error: ${error}`})
    }
}

export const updateCategory= async (req, res) => {
    
}

export const deleteCategory= async (req, res) => {
    try {
        await prisma.$transaction(async (prisma) => {
            const category = await prisma.category.findUnique({
                where: {
                    id: req.query.id,
                },
                include: {
                    products: true,
                },
            });

            if (!category) {
                return res.status(404).json({ msg: 'Category not found' });
            }

            const productIds = category.products.map((product) => product.id);

            await prisma.product.deleteMany({
                where: {
                    id: {
                    in: productIds,
                    },
                },
            });

            const categoryDeleted = await prisma.category.delete({
                where: {
                    id: req.query.id,
                },
            });

            res.status(200).json(categoryDeleted);
        });
    } catch (error) {
        res.status(500).json({ msg: `Error: ${error}` });
    }
}