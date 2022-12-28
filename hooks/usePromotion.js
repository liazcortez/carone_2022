import { useContext } from "react";
import PromotionsContext from "../context/promotions/promotionsContext";

const usePromotion = () => useContext(PromotionsContext);

export default usePromotion;
