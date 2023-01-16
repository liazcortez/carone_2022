import { useContext } from 'react';
import CardContext from '../context/card/cardContext';

const useCard = () => useContext(CardContext);

export default useCard;
