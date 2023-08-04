import { PrismaClient } from "@prisma/client"

//forma 2 de consultar la base de datos desde achivos API con el where nos trae especificamente lo q le pidamos.
//en este caso solo los que tienen categoria 2.
export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const products = await prisma.product.findMany({
    where: { categoryId: 2 },
  })
  res.status(200).json(products)
}
