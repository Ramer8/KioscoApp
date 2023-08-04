import Image from "next/image"
import { formatMoney } from "../helpers"
import useKiosk from "../hooks/useKiosk"

const Product = ({ products }) => {
  const { name, image, price } = products
  const { handleSetProduct, handleChangeModal } = useKiosk()
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-1 p-3 ">
      <Image
        className="rounded-xl"
        src={`/assets/img/${image}.jpg`}
        alt={`dishes image ${name}`}
        width={400}
        height={500}
      />
      <div className="grid gap-1 grid-rows-2 md:grid-rows-1 text-4xl md:text-4xl">
        <h3 className="text-xl font-bold  md:truncate ">{name}</h3>
        <p className="font-black text-amber-500">{formatMoney(price)}</p>
      </div>
      <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-800 sm:w-full mt-5 p-3
                 text-white uppercase font-bold rounded-xl h-12 mx-20 w-full sm:mx-auto"
        onClick={() => {
          handleChangeModal()
          handleSetProduct(products)
        }}
      >
        Add
      </button>
    </div>
  )
}

export default Product
