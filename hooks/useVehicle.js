import { useContext } from 'react';
import VehicleContext from '../context/vehicle/vehicleContext';

const useVehicle = () => useContext(VehicleContext);

export default useVehicle;
