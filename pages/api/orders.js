import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  //Obtener Ordenes
  const commands = await prisma.order.findMany({
    where: { state: false },
  })
  console.log(commands)
  res.status(200).json(commands)

  //Generar Ordenes
  if (req.method === "POST") {
    const order = await prisma.order.create({
      data: {
        name: req.body.name,
        total: req.body.total,
        request: req.body.order,
        date: req.body.date,
      },
    })
    res.status(200).json(order)
  }
}
