import { useContext } from 'react';
import AlertContext from '../context/auth/authContext';

const useAlert = () => useContext(AlertContext);

export default useAlert;
