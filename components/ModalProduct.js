import Image from "next/image"
import useKiosk from "../hooks/useKiosk"
import { formatMoney } from "../helpers"
import { useState, useEffect } from "react"

const ModalProduct = () => {
  const { product, handleChangeModal, handleAddOrder, order } = useKiosk()
  const [amount, setAmount] = useState(1)
  const [edition, setEdition] = useState(false)

  useEffect(() => {
    if (order.some((orderProd) => orderProd.id === product.id)) {
      const updateAmount = order.find(
        (orderProd) => orderProd.id === product.id
      )
      setAmount(updateAmount.amount)
      setEdition(true)
    }
  }, [order, product])
  return (
    <div className="md:flex gap-2">
      <div className="md:w-1/3 flex justify-center xl:w-1/2 2xl:w-1/2">
        <Image
          className="rounded-xl sm:w-auto w-1/2 lg:w-auto pt-2 sm:pt-0"
          width={300}
          height={400}
          alt={`product image ${product.name}`}
          src={`/assets/img/${product.image}.jpg`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-4 mx-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mx-5">
          <h1 className="text-xl sm:text-2xl lg:text-3xl md:text-2xl font-bold sm:mt-5 mt-2">
            {product.name}
          </h1>
          <p className="sm:mt-5 mt-2 font-black text-2xl sm:text-3xl lg:text-5xl md:text-4xl text-amber-500">
            {formatMoney(product.price)}
          </p>
          <div className="flex gap-6 sm:mt-5 mt-2 text-center text-lg sm:text-2xl lg:text-3xl md:text-2xl">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 sm:w-7 sm:h-7"
                type="button"
                onClick={() => {
                  if (amount <= 1) return
                  setAmount(amount - 1)
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <p className="text-lg sm:text-3xl">{amount}</p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 sm:w-7 sm:h-7"
                type="button"
                onClick={() => {
                  if (amount >= 5) return
                  setAmount(amount + 1)
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <button
            className="bg-indigo-600 uppercase hover:bg-indigo-800 text-white font-bold rounded-xl sm:my-2 my-2 px-5 py-2 w-auto"
            type="button"
            onClick={() => {
              handleAddOrder({ ...product, amount }, handleChangeModal())
            }}
          >
            {edition ? "Save changes" : "Add Order"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalProduct
