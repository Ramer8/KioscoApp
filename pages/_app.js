import "../styles/globals.css"
import { KioskProvider } from "../context/kioskProvider"

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <KioskProvider>
        <Component {...pageProps} />
      </KioskProvider>
    </div>
  )
}

export default MyApp

{
  /* <div
className={`${
  currentCategory?.id === id ? "bg-amber-400 text-amber-600" : ""
} 
  flex items-center w-full my-2 mx-2 gap-4 p-5 rounded-xl  bg-gray-200 dark:bg-slate-800  hover:bg-amber-400`}
>
<button
  type="button"
  className="text-2xl font-bold hover:cursor-pointer flex gap-4 items-center"
  onClick={() => handleClickCategory(id)}
>
  <Image
    width={70}
    height={70}
    src={`/assets/img/icono_${icon}.svg`}
    alt="icon image"
    className="mx-6"
  />
  <div className="my-auto">{name}</div>
</button>
</div> */
}
