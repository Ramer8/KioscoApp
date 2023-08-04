import Head from "next/head"
import Image from "next/image"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function AdminLayout({
  children,
  pagina,
  modalOrdersPendient,
  setModalOrdersPendient,
}) {
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Coffee Kiosk" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
          <Image
            width={200}
            height={100}
            src="/assets/img/logo.svg"
            alt="imagen logotipo"
            className="mx-auto o dark:bg-indigo-900 bg-gray-100 rounded-t-full rounded-bl-full rounded-rt-full"
          />
          <h2>
            <div
              className={`${
                !modalOrdersPendient
                  ? "bg-amber-400 text-amber-600"
                  : " bg-gray-200  dark:bg-slate-800"
              }
                  flex items-center w-full my-2 gap-4 px-5 py-4 rounded-xl hover:bg-amber-400  hover:text-black
                    `}
            >
              <button
                type="button"
                className="font-bold hover:cursor-pointer flex gap-4"
                onClick={() => setModalOrdersPendient(false)}
              >
                <div className="my-auto text-sm sm:text-xl lg:text-2xl md:text-xl  ">
                  Done orders
                </div>
              </button>
            </div>
            <div
              className={`${
                modalOrdersPendient
                  ? "bg-amber-400 text-amber-600"
                  : " bg-gray-200  dark:bg-slate-800"
              }
                  flex items-center w-full my-2 gap-4 px-5 py-4 rounded-xl hover:bg-amber-400  hover:text-black
                    `}
            >
              <button
                type="button"
                className="font-bold hover:cursor-pointer flex gap-4"
                onClick={() => setModalOrdersPendient(true)}
              >
                <div className="my-auto text-sm sm:text-xl lg:text-2xl md:text-xl  ">
                  Pending orders
                </div>
              </button>
            </div>
          </h2>
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-8">{children}</div>
        </main>
      </div>
      <ToastContainer />
    </>
  )
}
