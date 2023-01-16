import React, { useReducer } from 'react';
import CardContext from './cardContext';
import CardReducer from './cardReducer';
import api from '../../api/api';
import {  
  GET_CARD, 
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
 } from '../types';

const CardState = props => {
  const initialState = {
    cards: [],
    card: {},
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(CardReducer, initialState);

  //Get Single Item by slug
  const getCardBySlug = async slug => {
    clearState();
    setLoading();
    try {
      const res = await api.get(`/cards/slug/${slug}`);
      dispatch({
        type: GET_CARD,
        payload: res.data.data
      });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.response.data})

    }
  };



  //Clear State
  const clearState = () => dispatch({ type: CLEAR_STATE });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CardContext.Provider
      value={{
        loading: state.loading,
        cards: state.cards,
        card: state.card,
        error: state.error,
        getCardBySlug,
        clearState,
        setLoading,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;
