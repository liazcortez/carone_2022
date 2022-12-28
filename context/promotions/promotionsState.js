import React, { useReducer } from "react";
import PromotionsContext from "./promotionsContext";
import promotionsReducer from "./promotionsReducer";
import api from "../../api/api";
import {
  GET_PROMOTIONS_BY_SLUG,
  SET_LOADING,
  CLEAR_STATE,
  SET_ERROR,
} from "../types";

const PromotionState = (props) => {
  const initialState = {
    slug: {},
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(promotionsReducer, initialState);

  //Get Promotions By Slug
  const getPromotionBySlug = async (slug) => {
    setLoading();

    try {
      const res = await api.get(`/promotions/${slug}`);
      dispatch({ type: GET_PROMOTIONS_BY_SLUG, payload: res.data.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err });
    }
  };

  //Clear State
  const clearState = () => dispatch({ type: CLEAR_STATE });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PromotionsContext.Provider
      value={{
        loading: state.loading,
        slug: state.slug,
        error: state.error,
        getPromotionBySlug,
        clearState,
        setLoading,
      }}>
      {props.children}
    </PromotionsContext.Provider>
  );
};

export default PromotionState;
