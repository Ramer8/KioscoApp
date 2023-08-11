import Head from "next/head"
import Modal from "react-modal"
import { ToastContainer } from "react-toastify"
import Sidebar from "../components/Sidebar"
import Steps from "../components/Steps"
import ModalProduct from "../components/ModalProduct"
import useKiosk from "../hooks/useKiosk"
import ModalQuestion from "../components/ModalQuestion"

import "react-toastify/dist/ReactToastify.css"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

Modal.setAppElement("#__next")

export default function Layout({ children, pagina }) {
  const { modal, modalQuestion } = useKiosk()
  return (
    <>
      <Head>
        <title>Coffe - {pagina}</title>
        <meta name="description" content="Coffee Kiosk" />
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className=" md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <Steps />
          <div className="p-3">{children}</div>
        </main>
      </div>
      {modal && (
        <Modal
          className={
            "bg-opacity-60 text-white rounded-xl bg-black mt-20 sm:mx-auto md:w-10/12 xl:w-1/2 2xl:w-1/2"
          }
          isOpen={modal}
          styles={customStyles}
        >
          <ModalProduct />
        </Modal>
      )}
      {modalQuestion && (
        <Modal
          className={
            "bg-opacity-60 text-white rounded-xl bg-black mt-40 sm:mx-auto md:w-1/3 xl:w-1/3 2xl:w-1/3"
          }
          isOpen={modalQuestion}
          styles={customStyles}
        >
          <ModalQuestion />
        </Modal>
      )}
      <ToastContainer
        position="top-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
