import Image from "next/image"
import useKiosk from "../hooks/useKiosk"
import Category from "./Category"

const Sidebar = ({ onBtnClick }) => {
  const { category } = useKiosk()
  return (
    <>
      <Image
        className="mx-auto dark:bg-slate-700 bg-gray-100 pr-1 rounded-t-full"
        width={200}
        height={100}
        src="/assets/img/logo.svg"
        alt="image logo"
      />
      <nav className="sm:mt-5 mt-3 px-2">
        {category &&
          category.map((cat) => (
            <Category key={cat.id} category={cat} onBtnClick={onBtnClick} />
          ))}
      </nav>
    </>
  )
}

export default Sidebar
