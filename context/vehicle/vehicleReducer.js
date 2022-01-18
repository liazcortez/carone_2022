import { 
  GET_VEHICLES_ADVANCED_SEARCH, 
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_VEHICLES_ADVANCED_SEARCH:
      return {
        ...state,
        vehicles: action.payload.data,
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
        vehicle: {},
        vehicles: [],
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
