import React from "react"
import useKiosk from "../hooks/useKiosk"
//error el borrar, borra el utlimo q modifico el id. tengo sueño para detectar error
const ModalQuestion = () => {
  const { handleChangeModalQuestion, handleDeleteProduct, product } = useKiosk()

  return (
    <div>
      <h1 className="text-2xl font-bold text-center p-5">
        Are you sure to Delete this product?
      </h1>
      <div className="flex-wrap text-center gap-2">
        <button
          className="bg-red-600 uppercase hover:bg-red-800 my-5 text-white font-bold rounded-xl px-5 py-2 w-auto"
          type="button"
          onClick={() => {
            handleDeleteProduct(product.id), handleChangeModalQuestion()
          }}
        >
          yes
        </button>
        <button
          className="bg-green-600 uppercase hover:bg-green-800 my-5 text-white font-bold rounded-xl px-5 py-2 w-auto"
          type="button"
          onClick={() => {
            handleChangeModalQuestion()
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ModalQuestion
