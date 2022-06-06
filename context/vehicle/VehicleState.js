import React, { useReducer } from "react";
import VehicleContext from "./vehicleContext";
import VehicleReducer from "./vehicleReducer";
import api from "../../api/api";
import {
  GET_VEHICLES_ADVANCED_SEARCH,
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
  GET_VEHICLES
} from "../types";

const VehicleState = (props) => {
  const initialState = {
    vehicles: [],
    loading: false,
    error: null,
    results: null,
  };

  const [state, dispatch] = useReducer(VehicleReducer, initialState);

  const getVehiclesByMake = async(make) =>{
    setLoading();
    try {
      const res = await api.get(
        `/cars/CarsMake/${make}`
      );
      dispatch({ type: GET_VEHICLES, payload: res.data.data });
    } catch (err) {

      dispatch({ type: SET_ERROR, payload: err})


    }
  }
  //Get Vehicles
  const getVehicles = async (page, query) => {
    setLoading();
    try {
      const res = await api.get(
        `/vehicles/advancedResults?searchText=${query}&page=${page}`
      );
      dispatch({ type: GET_VEHICLES_ADVANCED_SEARCH, payload: res.data });
    } catch (err) {

      dispatch({ type: SET_ERROR, payload: err})


    }
  };

  //Clear State
  const clearState = () => dispatch({ type: CLEAR_STATE });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <VehicleContext.Provider
      value={{
        loading: state.loading,
        vehicles: state.vehicles,
        error: state.error,
        results: state.results,
        getVehicles,
        clearState,
        getVehiclesByMake,
        setLoading,
      }}
    >
      {props.children}
    </VehicleContext.Provider>
  );
};

export default VehicleState;
