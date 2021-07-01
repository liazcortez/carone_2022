import { 
  GET_MAKES,
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MAKES:
      return {
        ...state,
        makes: action.payload,
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
        make: {},
        makes: [],
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
