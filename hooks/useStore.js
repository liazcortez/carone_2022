import { useContext } from 'react';
import StoreContext from '../context/store/storeContext';

const useStore = () => useContext(StoreContext);

export default useStore;
