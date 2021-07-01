import React, { useReducer } from 'react';
import MakeContext from './makeContext';
import MakeReducer from './makeReducer';
import api from '../../api/api';
import { 
  GET_MAKES, 
  SET_ERROR, 
  CLEAR_STATE, 
  SET_LOADING 
} from '../types';

const MakeState = props => {
  const initialState = {
    makes: [],
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(MakeReducer, initialState);

  //Get Makes
  const getMakes = async () => {
    clearState();
    setLoading();
    try {
      const res = await api.get(`/makes?sort=name`);
      dispatch({ type: GET_MAKES, payload: res.data.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err})
    }
  };

  //Clear State
  const clearState = () => dispatch({ type: CLEAR_STATE });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MakeContext.Provider
      value={{
        loading: state.loading,
        makes: state.makes,
        error: state.error,
        getMakes,
        setLoading, 
        clearState
      }}
    >
      {props.children}
    </MakeContext.Provider>
  );
};

export default MakeState;
