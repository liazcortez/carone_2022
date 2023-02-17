import {
  CREATE_COMPLAINT,
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
} from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_COMPLAINT:
      return {
        ...state,
        success: "Gracias por enviarnos tu comentario",
        complaint: action.payload,
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
        complaint: {},
        loading: false,
        error: null,
        success: null,
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

export default reducer;
