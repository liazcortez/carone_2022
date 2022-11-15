import React, { useReducer } from "react";
import PreownedContext from "./preownedContext";
import PreownedReducer from "./preownedReducer";
import api from "../../api/api";
import {
  GET_PREOWNEDS_ADVANCED_SEARCH,
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
  CALCULATE_PRICES
} from "../types";

const PreownedState = (props) => {
  const initialState = {
    preowneds: [],
    prices: null,
    loading: false,
    error: null,
    results: null,
  };

  const [state, dispatch] = useReducer(PreownedReducer, initialState);

  const calculatePrices = async(data) => {
    const { makeName, modelName, year } = data;
    setLoading();
    try {
      const res = await api.get(`/preowneds/calculatePrice?marca=${makeName}&modelo=${modelName}&year=${year}`);
      dispatch({ type: CALCULATE_PRICES, payload: res.data.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err})
    }
  }

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

  const getPreownedsV2 = async ({limit, page, query}) => {
    setLoading();
    try {
      const res = await api.get(`/preowneds/getPreownedsV2?page=${page}&limit=${limit}&searchIndex=model-category-make-year&searchText=${query}&publishedIn=both-web`);

      // preowneds: action.payload.data,
      // results: action.payload.pagination.total
      let payload = {data:res.data.data,pagination:{total:100}};
      dispatch({ type: GET_PREOWNEDS_ADVANCED_SEARCH, payload});
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.response.data})
    }
  };

   //Get Preowneds
   const getPreowned = async (preownedId) => {
    clearState();
    setLoading();
    try {
      const res = await api.get(`/preowneds/${preownedId}`);
      dispatch({ type: GET_PREOWNED, payload: res.data.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.response.data})

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
        prices: state.prices,
        getPreowneds,
        getPreownedsV2,
        clearState,
        setLoading,
        calculatePrices
      }}
    >
      {props.children}
    </PreownedContext.Provider>
  );
};

export default PreownedState;
