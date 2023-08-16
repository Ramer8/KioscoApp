import { useRouter } from "next/router"
import useKiosk from "../hooks/useKiosk"
const steps = [
  { paso: 1, name: "Menú ", url: "/" },
  { paso: 2, name: "Summary ", url: "/summary" },
  { paso: 3, name: "Total & Data ", url: "/total" },
]

const Steps = ({ onBtnClick }) => {
  const { handleChangeStep, order } = useKiosk()
  const router = useRouter()

  const calculateProgress = () => {
    let value
    if (router.pathname === "/") {
      value = 2
    } else if (router.pathname === "/summary") {
      value = 50
    } else {
      value = 100
    }
    return value
  }
  return (
    <>
      <div className="flex justify-between mb-5 mx-5 mt-10">
        {steps.map((step) => (
          <button
            key={step.paso}
            className="sm:text-2xl text-sm font-bold"
            onClick={() => {
              router.push(step.url)
              handleChangeStep(step.paso)
              onBtnClick(step.name)
            }}
          >
            <div>
              {step.name}
              {order.length && step.paso === 2 ? (
                <span className="text-sm sm:text-lg  font-normal">
                  ({order.length})
                </span>
              ) : (
                ""
              )}
            </div>
          </button>
        ))}
      </div>
      <div className="bg-gray-100 dark:bg-slate-800 mb-5 sm:mb-10 rounded-full mx-5">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
    </>
  )
}

export default Steps
