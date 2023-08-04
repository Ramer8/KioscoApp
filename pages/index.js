// import { PrismaClient } from "@prisma/client" //solo si usamos getServ.. para acceder a los datos.
import Layout from "../layout/layout"
import useKiosk from "../hooks/useKiosk"
import Product from "../components/Product"
import { products } from "../prisma/data/products"
import Image from "next/image"

export default function Home({}) {
  const { currentCategory } = useKiosk()
  return (
    <Layout pagina={`Menú ${currentCategory?.name}`}>
      <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
      <p className="text-2xl my-10">
        Choose and customize your order here below
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
        {/* <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"> tambien puede ser 3 columnas en mi pantalla*/}
        {currentCategory?.products?.map((prod) => (
          <Product key={prod.id} products={prod} />
        ))}
      </div>
    </Layout>
  )
}

//forma 1 de consultar la base de datos, esta y la de abajo.
// En este proyecto usamos los endpoints para acceder a la base de datos.

// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient()
//   const categories = await prisma.category.findMany()
//   console.log(categories)
//   return {
//     props: {
//       categories,
//     },
//   }
// }

// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient()
//   const categories = await prisma.category.findFirst({
//     where: {
//       name: "Pizzas",
//     },
//   })
//   console.log(categories)
//   return {
//     props: {
//       categories,
//     },
//   }
// }
