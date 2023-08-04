import useSWR from "swr"
import AdminLayout from "../layout/AdminLayout"
import axios from "axios"
import Order from "../components/Order"
import { useState } from "react"
export default function Admin() {
  const [modalOrdersPendient, setModalOrdersPendient] = useState(true)

  const fetcher = () => axios("/api/orders").then((datos) => datos.data)
  const { data, error, isLoading } = useSWR("/api/orders", fetcher, {
    refreshInterval: 100,
  })

  const fetcherOrdersDone = () =>
    axios("/api/doneOrders").then((datos) => datos.data)
  const {
    data: dataDone,
    error: errorOrderDone,
    isLoading: isLoadingOrderDone,
  } = useSWR("/api/doneOrders", fetcherOrdersDone, {
    refreshInterval: 100,
  })

  return (
    <AdminLayout
      pagina={"Admin"}
      modalOrdersPendient={modalOrdersPendient}
      setModalOrdersPendient={setModalOrdersPendient}
    >
      <h1 className="font-black text-xl sm:text-2xl lg:text-3xl md:text-3xl">
        Administration Dashboard
      </h1>
      <p className="sm:text-2xl text-xl my-5 md:my-10 font-bold text-amber-600">
        {modalOrdersPendient ? "Pending orders" : "Done orders"}
      </p>
      <div>
        {modalOrdersPendient ? (
          //Orders not ready
          <h1>
            {data && data.length
              ? data.map((order) => (
                  <Order
                    key={order.id}
                    order={order}
                    modalOrdersPendient={modalOrdersPendient}
                  ></Order>
                ))
              : "No pending orders"}
          </h1>
        ) : (
          //Orders Already
          <h1>
            {dataDone && dataDone.length
              ? dataDone.map((order) => (
                  <Order key={order.id} order={order}></Order>
                ))
              : "No orders complete"}
          </h1>
        )}
      </div>
    </AdminLayout>
  )
}
