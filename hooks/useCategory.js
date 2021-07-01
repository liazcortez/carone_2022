import { useContext } from 'react';
import CategoryContext from 'src/contexts/category/categoryContext';

const useCategory = () => useContext(CategoryContext);

export default useCategory;
