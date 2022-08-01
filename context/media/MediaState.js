import React, { useReducer } from 'react';
import MediaContext from './mediaContext';
import MediaReducer from './mediaReducer';
import api from '../../api/api';
import { 
  SET_ERROR,
  SET_LOADING,
  CLEAR_STATE,
  GET_MEDIAS_MAIN_BANNER
 } from '../types';

const MediaState = props => {
  const initialState = {
    medias: [],
    mediasMainBanner: [],
    media: {},
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(MediaReducer, initialState);

  const getMediasMainBanner = async() => {
    console.log(123)
    setLoading();
    try {
      const res = await api.get(`/medias?section=main-banner&ShowBanner=true`);
      console.log(res.data.data)
      dispatch({ type: GET_MEDIAS_MAIN_BANNER, payload: res.data.data });
    } catch (err) {
      console.log(err)
      dispatch({ type: SET_ERROR, payload: err.response.data})

    }
  }

  //Clear State
  const clearState = () => dispatch({ type: CLEAR_STATE });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MediaContext.Provider
      value={{
        loading: state.loading,
        mediasMainBanner: state.mediasMainBanner,
        error: state.error,
        getMediasMainBanner,
        clearState,
        setLoading
      }}
    >
      {props.children}
    </MediaContext.Provider>
  );
};


export default MediaState;


