import Image from "next/image"
import useKiosk from "../hooks/useKiosk"
import Category from "./Category"

const Sidebar = () => {
  const { category } = useKiosk()
  return (
    <>
      <Image
        className="mx-auto mt-2 dark:bg-indigo-900 bg-gray-100 rounded-t-full rounded-bl-full rounded-rt-full"
        width={200}
        height={100}
        src="/assets/img/logo.svg"
        alt="image logo"
      />
      <nav className="mt-7 px-2">
        {category &&
          category.map((cat) => <Category key={cat.id} category={cat} />)}
      </nav>
    </>
  )
}

export default Sidebar
