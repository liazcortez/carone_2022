import React, { useReducer } from 'react';
import CategoryContext from './jobCategoryContext';
import CategoryReducer from './jobCategoryReducer';
import api from '../../api/api';
import { 
  GET_CATEGORIES, 
  SET_ERROR,
  SET_LOADING,
  CLEAR_STATE
 } from '../types';

const CategoryState = props => {
  const initialState = {
    jobCategories: [],
    jobCategory: {},
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(CategoryReducer, initialState);

  //Get Categories
  const getCategories = async () => {
    clearState();
    setLoading();
    try {
      const res = await api.get(`/jobCategories`);
      dispatch({ type: GET_CATEGORIES, payload: res.data.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err})

    }
  };

  //Clear State
  const clearState = () => dispatch({ type: CLEAR_STATE });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CategoryContext.Provider
      value={{
        loading: state.loading,
        jobCategories: state.jobCategories,
        jobCategory: state.jobCategory,
        error: state.error,
        getCategories,
        clearState,
        setLoading
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;


