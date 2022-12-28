import {
  GET_PROMOTIONS_BY_SLUG,
  SET_LOADING,
  CLEAR_STATE,
  SET_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PROMOTIONS_BY_SLUG:
      return {
        ...state,
        slug: action.payload,
        loading: false,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CLEAR_STATE:
      return {
        slug: {},
        loading: false,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
