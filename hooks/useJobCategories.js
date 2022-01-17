import { useContext } from 'react';
import JobCategoriesContext from '../context/jobCategories/jobCategoriesContext';

const useJobCategories = () => useContext(JobCategoriesContext);

export default useJobCategories;
