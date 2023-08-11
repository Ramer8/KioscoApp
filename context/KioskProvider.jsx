import { useEffect, useState, createContext } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/router"

const KioskContext = createContext()

const KioskProvider = ({ children }) => {
  const [category, setCategory] = useState()
  const [currentCategory, setCurrentCategory] = useState({})
  const [product, setProduct] = useState({})
  const [modal, setModal] = useState(false)
  const [modalQuestion, setModalQuestion] = useState(false)
  const [order, setOrder] = useState([])
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [total, setTotal] = useState(0)

  const router = useRouter()

  // aca leo las categorias del archivo no de la base de datos..? lo habre echo asi x q no andaba...?
  //Si la lee de la base de datos x q esos archivos estan atados a la db
  // Axios hace el fetch en /api/category porque corre en el misma ruta,
  //osea en http://localhost:3000/api/category por eso solo pone /api/category x q ya estamos en 'localhost:3000'

  const getCategory = async () => {
    const data = await axios("/api/category")
    setCategory(data.data)
    setCurrentCategory(data.data[0]) // otra opcion es setearlo aqui y listo. Creo q es mejor.
  }

  useEffect(() => {
    getCategory()
  }, [])

  const handleChangeModal = () => {
    setModal(!modal)
  }

  const handleSetProduct = (product) => {
    setProduct(product)
  }

  const handleClickCategory = (id) => {
    const categ = category.filter((cat) => cat.id === id)
    setCurrentCategory(categ[0]) //pongo en la posicion 0 para acceder a los datos.
    handleSetProduct(product)
    router.push("/")
  }
  const handleAddOrder = ({ categoryId, ...product }) => {
    if (order.some((prodState) => prodState.id === product.id)) {
      const updateOrder = order.map((prodState) =>
        prodState.id === product.id ? product : prodState
      )
      setOrder(updateOrder)
      toast.success("Saved successfuly")
    } else {
      setOrder([...order, product])
      toast.success("Adding to order")
    }
    setModal(false)
  }
  const handleChangeStep = (step) => {
    setStep(step)
  }
  const handleEditAmount = (id) => {
    const updateProduct = order.filter((product) => product.id === id)
    setProduct(updateProduct[0])
    setModal(!modal)
  }
  const handleDeleteProduct = (id) => {
    const updateProduct = order.filter((product) => product.id !== id)
    setOrder(updateProduct)
  }

  //Puse un modal para preguntar si esta seguro q quiere borrar pero tiene un error de id
  // const handleChangeModalQuestion = (id) => {
  //   setModalQuestion(!modalQuestion)
  // }

  const putOrder = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/api/orders", {
        order,
        name,
        total,
        date: Date.now().toString(),
      })
      //Reset App
      // setCurrentCategory(category[0])
      setOrder([])
      setName("")
      setTotal(0)

      toast.success("Order done successfully")

      setTimeout(() => {
        router.push("/")
      }, 2000)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const newTotal = order.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
    setTotal(newTotal)
  }, [order])
  return (
    <KioskContext.Provider
      value={{
        category,
        currentCategory,
        handleClickCategory,
        currentCategory,
        handleSetProduct,
        modal,
        handleChangeModal,
        product,
        handleAddOrder,
        order,
        // step,
        handleChangeStep,
        handleEditAmount,
        handleDeleteProduct,
        // handleChangeModalQuestion,
        // modalQuestion,
        total,
        setTotal,
        name,
        setName,
        putOrder,
      }}
    >
      {children}
    </KioskContext.Provider>
  )
}
export { KioskProvider }
export default KioskContext
