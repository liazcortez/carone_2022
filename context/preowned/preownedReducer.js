import { 
  GET_PREOWNEDS_ADVANCED_SEARCH, 
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
  CALCULATE_PRICES
} from '../types';

export default (state, action) => {
  switch (action.type) {

    case CALCULATE_PRICES:
      return {
        ...state,
        prices: action.payload,
        loading: false,
        error: null,
      };
    case GET_PREOWNEDS_ADVANCED_SEARCH:
      return {
        ...state,
        preowneds: action.payload.data,
        loading: false,
        error: null,
        results: action.payload.pagination.total
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case CLEAR_STATE:
      return {
        preowned: {},
        preowneds: [],
        prices: null,
        loading: false,
        error: null
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
        }
    default:
      return state;
  }
};
