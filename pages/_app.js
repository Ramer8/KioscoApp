import "../styles/globals.css"
import { KioskProvider } from "../context/KioskProvider"

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
