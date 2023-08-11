import Image from "next/image"
import useKiosk from "../hooks/useKiosk"

const Category = ({ category }) => {
  const { handleClickCategory, currentCategory } = useKiosk()
  const { name, id, icon } = category

  return (
    <div>
      <div
        className={`${
          currentCategory?.id === id
            ? "bg-amber-400 text-amber-600"
            : " bg-gray-200 dark:bg-slate-800"
        } 
  flex items-center w-full my-2 gap-4 px-5 py-4 rounded-xl hover:bg-amber-400 hover:text-black `}
      >
        <button
          type="button"
          className="font-bold hover:cursor-pointer flex gap-4"
          onClick={() => handleClickCategory(id)}
        >
          <Image
            width={70}
            height={70}
            src={`/assets/img/icono_${icon}.svg`}
            alt="icon image"
            className="mx-2 lg:w-1/4 w-1/5"
          />
          <div className="my-auto text-sm sm:text-xl lg:text-2xl md:text-xl  ">
            {name}
          </div>
        </button>
      </div>
    </div>
  )
}

export default Category
