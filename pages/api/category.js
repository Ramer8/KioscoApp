import { PrismaClient } from "@prisma/client"

//forma 2 de consultar la base de datos desde achivos API
export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const category = await prisma.category.findMany({
    include: { products: true },
  })
  res.status(200).json(category)
}
