import React, { useReducer } from "react";
import PreownedContext from "./preownedContext";
import PreownedReducer from "./preownedReducer";
import api from "../../api/api";
import {
  GET_PREOWNEDS_ADVANCED_SEARCH,
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
} from "../types";

const PreownedState = (props) => {
  const initialState = {
    preowneds: [],
    loading: false,
    error: null,
    results: null,
  };

  const [state, dispatch] = useReducer(PreownedReducer, initialState);

  //Get Preowneds
  const getPreowneds = async (page, query) => {
    setLoading();
    try {
      const res = await api.get(
        `/preowneds/advancedResults?searchText=${query}&page=${page}`
      );
      dispatch({ type: GET_PREOWNEDS_ADVANCED_SEARCH, payload: res.data });
    } catch (err) {

      dispatch({ type: SET_ERROR, payload: err})


    }
  };

  //Clear State
  const clearState = () => dispatch({ type: CLEAR_STATE });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PreownedContext.Provider
      value={{
        loading: state.loading,
        preowneds: state.preowneds,
        error: state.error,
        results: state.results,
        getPreowneds,
        clearState,
        setLoading,
      }}
    >
      {props.children}
    </PreownedContext.Provider>
  );
};

export default PreownedState;
