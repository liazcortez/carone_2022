import { useContext } from 'react';
import MediaContext from '../context/media/mediaContext'

const useMedia = () => useContext(MediaContext);

export default useMedia;
