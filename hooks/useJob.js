import { useContext } from 'react';
import JobContext from '../context/job/jobContext';

const useJob = () => useContext(JobContext);

export default useJob;
