import React, { useReducer } from 'react';
import StoreContext from './storeContext';
import StoreReducer from './storeReducer';
import api from '../../api/api';
import { 
  GET_STORES, 
  SET_ERROR, 
  CLEAR_STATE, 
  SET_LOADING 
} from '../types';

const StoreState = props => {
  const initialState = {
    stores: [],
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(StoreReducer, initialState);

  //Get Stores
  const getStores = async () => {
    clearState();
    setLoading();
    try {
      const res = await api.get(`/stores?sort=name`);
      dispatch({ type: GET_STORES, payload: res.data.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err})
    }
  };

  //Clear State
  const clearState = () => dispatch({ type: CLEAR_STATE });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <StoreContext.Provider
      value={{
        loading: state.loading,
        stores: state.stores,
        error: state.error,
        getStores,
        setLoading, 
        clearState
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreState;
