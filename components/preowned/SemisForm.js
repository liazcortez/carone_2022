import React,{useState,useEffect} from 'react'
import { Typography, Box, Button, Divider} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useSnackbar } from "notistack";
import axios from "axios";

const SemisForm = ({preowned}) => {
  useEffect(()=>{console.log(preowned)}, [preowned] )

  const [dissableButton,setDissableButton] = useState(false)
  
  const defaultData = {
    name: "",
    email: "",
    phone: "",
    carType:'seminuevo',
    version:preowned.version,
    downPayment: 0,
    store: preowned.store.dpxStore,
    vehicle: preowned.vehicle,
    modelType: preowned.vehicle.modelType,
    vehicleModel: preowned.vehicle.model,
    make: preowned.vehicle.make,
    sellerMake:preowned.make,
    year: preowned.year,
    source: "605b541a020c150355aac5e6",
  };

  const [formData, setFormData] = React.useState(defaultData);

  const { name, email, phone, timeFrame, downPayment } = formData;

  const { enqueueSnackbar } = useSnackbar();

  const onHandleSubmit = async(e) => {
    e.preventDefault();
    await setDissableButton(true);

    let emailValidation = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let phoneValidation = new RegExp(/^[0-9]{10}$/);
    let downPaymentValidation = new RegExp(/^[0-9]+$/);
    console.log(formData);
    if(formData.name === '' || formData.email === '' || formData.phone === ''){
       enqueueSnackbar("Por favor llena todos los campos", {
        variant: "error",
      });
    }else if(!phoneValidation.test(formData.phone)){
       enqueueSnackbar("Por favor utiliza un télefono válido (10 Dpigitos)", {
        variant: "error",
      });
    }
    else if(!emailValidation.test(formData.email)){
      enqueueSnackbar("Por favor utiliza un email válido", {
     variant: "error",
   });
   }
    else if(!downPaymentValidation.test(formData.downPayment)){
       enqueueSnackbar("Ingresa un enganche válido (Solo números)", {
        variant: "error",
      });
    }else{
      
      await sendLead(formData);

        enqueueSnackbar("Se ha enviado tu información, en breve un asesor se pondrá en contacto contigo.", {
          variant: "success",
        });
      
    }
    setDissableButton(false);

  };


  const sendLead = async (lead) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      enqueueSnackbar("Formulario Completado Correctamente", {
        variant: "info",
      });
      const response = await axios.post(
        // "https://dealerproxapi.com/api/v1/leads/website",
        "http://localhost:5001/api/v1/leads/website",
        lead,
        config
      );
      setFormData(defaultData)
    } catch (err) {
      console.log(err)
    }
  };

  const onHandleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });


  return (
    
    <form onSubmit={onHandleSubmit}>
      <Box
        style={{ padding: 20, borderRadius: 10, marginBottom: 10, border: "1px solid #dbf2ff", flexDirection: "column"}}>
        

        <Box style={{justifyContent: "center"}}>
            <Typography
                      variant="h6"
                      component="p"
                      style={{ marginBottom: 10 }}
                    >
                    Cotiza Online
            </Typography>
        </Box>

        <Box>
          <TextField
          id="outlined-basic"
          label="Nombre Completo"
          variant="outlined"
          fullWidth
          onChange={onHandleChange}
          name='name'
          value={name}
          style={{
            marginBottom: 10,
            border: "1px solid #dbf2ff",
            borderRadius: 10,
          }}
          />
        </Box>

        <Box>
          <TextField
          id="outlined-basic"
          label="Telefono"
          variant="outlined"
          fullWidth
          onChange={onHandleChange}
          name='phone'
          value={phone}
          style={{
            marginBottom: 10,
            border: "1px solid #dbf2ff",
            borderRadius: 10,
          }}
          />
        </Box>

        <Box>
          <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          onChange={onHandleChange}
          name='email'
          value={email}
          style={{
            marginBottom: 10,
            border: "1px solid #dbf2ff",
            borderRadius: 10,
          }}
          />
        </Box>

        <Box>
          <TextField
          id="outlined-basic"
          onChange={onHandleChange}
          label="Cuanto puedes dar de enganche?"
          variant="outlined"
          fullWidth
          name="downPayment"
                  value={downPayment}
                  onChange={onHandleChange}
          style={{
            marginBottom: 10,
            border: "1px solid #dbf2ff",
            borderRadius: 10,
          }}
          />
        </Box>

        <Box>
        <Button
          variant="contained"
           color="primary"
           fullWidth
           type="submit"
           disabled={dissableButton}
        >
          Cotizar
          </Button>
        </Box>

    </Box>
    </form>
  )
}

export default SemisForm;