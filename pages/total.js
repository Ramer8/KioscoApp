import useKiosk from "../hooks/useKiosk"
import Layout from "../layout/layout"
import { useEffect, useCallback } from "react"
import { formatMoney } from "../helpers"

export default function Total() {
  const { order, name, setName, putOrder, total } = useKiosk()

  const checkOrder = useCallback(() => {
    return order.length === 0 || name?.length <= 3
  }, [order, name])

  useEffect(() => {
    checkOrder()
  }, [order, checkOrder])

  return (
    <Layout pagina="Total and check your order">
      <h1 className="font-black text-4xl  ">Data & Total</h1>
      <p className="text-2xl my-10 font-bold">Check your order please..</p>
      <form className="p-5" onSubmit={putOrder}>
        <div>
          <label
            htmlFor="name"
            className="block uppercase text-slate-500 font-bold text-xl"
          >
            name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            className="bg-gray-200 w-full mt-3 lg:w-1/3 p-2 rounded-lg text-slate-800"
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total to pay:
            <span className="font-bold"> {formatMoney(total)}</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            className={`${
              checkOrder()
                ? "bg-indigo-200"
                : "bg-indigo-600 hover:bg-indigo-800"
            }
             text-center w-full px-5 py-2 lg:w-1/3 rounded-lg uppercase font-bold hover:cursor-pointer text-white`}
            value="Confirm order"
            disabled={checkOrder()}
          />
        </div>
      </form>
    </Layout>
  )
}
