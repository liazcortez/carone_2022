import React, { useReducer } from "react";
import ComplaintContext from "./complaintContext";
import ComplaintReducer from "./complaintReducer";
import api from "../../api/api";
import {
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
  CREATE_COMPLAINT,
} from "../types";

const ComplaintState = (props) => {
  const initialState = {
    loading: false,
    complaint: {},
    error: null,
    success: null,
  };

  const [state, dispatch] = useReducer(ComplaintReducer, initialState);

  const createComplaint = async (values) => {
    setLoading();
    try {
      const res = await api.post(`/complaints`, { ...values });
      dispatch({ type: CREATE_COMPLAINT, payload: res.data.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err });
    }
  };

  const clearState = () => dispatch({ type: CLEAR_STATE });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ComplaintContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        success: state.success,
        complaint: state.complaint,
        createComplaint,
        setLoading,
        clearState,
      }}
    >
      {props.children}
    </ComplaintContext.Provider>
  );
};

export default ComplaintState;
