import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createMenu= async (req, res) => {
    try {
        const newMenu = await prisma.menu.create({
            data: req.body.params
        });
    
        res.status(200).json(newMenu)
    } catch (error) {
        res.status(500).json({msg: `Error: ${error}`})
    }
}

export const getMenues = async (req, res) => {
    try {
        const menues = await prisma.menu.findMany({
            where: {
                userId: req.query.userId
            }
        });
    
        res.status(200).json(menues)
    } catch (error) {
        res.status(500).json({msg: `Error: ${error}`})
    }
}

export const updateMenu= async (req, res) => {
    
}

export const deleteMenu = async (req, res) => {
    try {
      await prisma.$transaction(async (prisma) => {
        const categories = await prisma.category.findMany({
          where: {
            menuId: req.query.id,
          },
          select: {
            id: true,
          },
        });
  
        const categoryIds = categories.map((category) => category.id);
  
        await prisma.product.deleteMany({
          where: {
            IdCategory: {
              in: categoryIds,
            },
          },
        });
  
        await prisma.category.deleteMany({
          where: {
            id: {
              in: categoryIds,
            },
          },
        });
  
        const menuEliminado = await prisma.menu.delete({
          where: {
            id: req.query.id,
          },
        });
  
        res.status(200).json(menuEliminado);
      });
    } catch (error) {
      res.status(500).json({ msg: `Error: ${error}` });
    }
};
  