import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  //Actualiza estado de Ordenes, de pendientes a completadas
  if (req.method === "POST") {
    const { id } = req.query
    const updateOrder = await prisma.order.update({
      where: { id: parseInt(id) },
      data: {
        state: true,
      },
    })
    res.status(200).json(updateOrder)
    //Elimina ordenes ya completadas
  } else if (req.method === "DELETE") {
    const { id } = req.query
    const deleteOrder = await prisma.order.delete({
      where: { id: parseInt(id) },
    })
    res.status(200).json(deleteOrder)
  }
}
