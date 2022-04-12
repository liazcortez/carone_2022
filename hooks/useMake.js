import { useContext } from 'react';
import MakeContext from '../context/make/makeContext';

const useMake = () => useContext(MakeContext);

export default useMake;
