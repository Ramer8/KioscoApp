import { useContext } from "react";
import KioskContext from "../context/kioskProvider";

const useKiosk = () => {
    return (
        useContext(KioskContext)
    )
}
export default useKiosk