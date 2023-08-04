import Image from "next/image"
import { formatDate, formatMoney } from "../helpers"
import axios from "axios"
import { toast } from "react-toastify"

const Order = ({ order, modalOrdersPendient }) => {
  const { id, name, request, date, total } = order

  const orderComplete = async () => {
    console.log("complentando", order.id)
    try {
      await axios.post(`/api/orders/${id}`)
      toast.success("Order Done")
    } catch (error) {
      toast.error("Error")
    }
  }
  const orderDelete = async () => {
    console.log("borrando", order.id)
    try {
      await axios.delete(`/api/orders/${id}`)
      toast.warning("Oder Deleted", {
        theme: "dark",
        draggable: true,
      })
    } catch (error) {
      toast.error("Error")
    }
  }
  return (
    <>
      <div className="shadow-slate-800 shadow-lg p-2 mb-3 sm:flex gap-5 items-start rounded-xl overflow-x-scroll ">
        {request.map((product) => (
          <div key={product.id} className="md:h-1/6 ">
            <Image
              className="rounded-xl"
              width={150}
              height={200}
              src={`/assets/img/${product.image}.jpg`}
              alt={`Imagen producto ${product.name}`}
            />
            <p className="text-xs font-light mt-2 ">{product.name}</p>
            <p className="text-xs font-semibold -screen  max-h-screen">
              Amount: {product.amount}
            </p>
          </div>
        ))}
        <div className="md:w-4/6">
          <p className="text-xl font-bold mt-2 dark:text-amber-100 text-amber-600 ">
            Order: {id}
          </p>
          <p className="text-lg font-extralight  dark:text-amber-500">
            Customer:
            <span className="text-xl uppercase font-semibold"> {name}</span>
          </p>
          <p className="text-sm font-semibold mt-1  text-gray-400">
            Date: {formatDate(date)}
          </p>
          <p className="text-lg font-light text-amber-700  dark:text-amber-200">
            Total a Pagar: {formatMoney(total)}
          </p>
        </div>

        {modalOrdersPendient ? (
          <div className="md:w-1/6 mx-2 my-2">
            <button
              type="button"
              className="flex p-1 w-32 rounded-md bg-amber-500 hover:opacity-60 font-bold uppercase"
              onClick={() => orderComplete()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 pt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>
              order done
            </button>
          </div>
        ) : (
          <div className="md:w-1/6 mx-2 my-2">
            <button
              type="button"
              className="flex p-1 w-32 rounded-md bg-red-600 hover:opacity-60 font-bold uppercase"
              onClick={() => orderDelete()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              Delete Order
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Order
