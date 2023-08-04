import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  //Obtener Ordenes ya completadas
  const ordersComplete = await prisma.order.findMany({
    where: { state: true },
  })
  console.log(ordersComplete)
  res.status(200).json(ordersComplete)
}
