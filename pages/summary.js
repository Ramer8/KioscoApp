import Layout from "../layout/layout"
import useKiosk from "../hooks/useKiosk"
import SummaryProduct from "../components/SummaryProduct"
export default function Summary() {
  const { order } = useKiosk()
  return (
    <Layout pagina="Summary">
      <h1 className="font-black sm:text-4xl text-2xl "> Summary</h1>
      <p className="sm:text-2xl text-xl sm:my-10 my-5 font-bold">
        Check your order
      </p>
      {order.length === 0 ? (
        <p className="text-center sm:text-2xl text-xl">
          Your order list it is empty
        </p>
      ) : (
        order.map((product) => (
          <SummaryProduct key={product.id} product={product} />
        ))
      )}
    </Layout>
  )
}
