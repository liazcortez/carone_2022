import { useContext } from 'react';
import PreownedContext from '../context/preowned/preownedContext';

const usePreowned = () => useContext(PreownedContext);

export default usePreowned;
