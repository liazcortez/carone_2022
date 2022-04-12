import { 
  GET_STORES,
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING
} from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_STORES:
      return {
        ...state,
        stores: action.payload,
        loading: false,
        error: null
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case CLEAR_STATE:
      return {
        store: {},
        stores: [],
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

export default reducer;
