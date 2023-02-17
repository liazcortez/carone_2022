import { useContext } from "react";
import ComplaintContext from "../context/complaint/complaintContext";

const useComplaint = () => useContext(ComplaintContext);

export default useComplaint;
