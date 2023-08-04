import Layout from "../layout/layout"
import useKiosk from "../hooks/useKiosk"
import SummaryProduct from "../components/SummaryProduct"
export default function Summary() {
  const { order } = useKiosk()
  return (
    <Layout pagina="Summary">
      <h1 className="font-black text-4xl"> Summary</h1>
      <p className="text-2xl my-10 font-bold">Check your order</p>
      {order.length === 0 ? (
        <p className="text-center text-2xl">Your order list it is empty</p>
      ) : (
        order.map((product) => (
          <SummaryProduct key={product.id} product={product} />
        ))
      )}
    </Layout>
  )
}
