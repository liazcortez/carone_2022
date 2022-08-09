import React,{useState,useEffect} from 'react'
import { Typography, Box, Button, Divider} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useSnackbar } from "notistack";
import axios from "axios";
import moment from 'moment';

const timeFrames = [
  {
    id: 0,
    value: 'Solo quiero información'
  },
  {
    id: 1,
    value: '1 Mes o Menos'
  },
  {
    id: 2,
    value: '2 Meses'
  },
  {
    id: 3,
    value: '3 Meses o Más'
  },
]


const CapitalizeNames = (string) => {
  if(string === undefined || string === null) return '';
  string = string.replace(/-/, ' ')

  const words = string.split(" ");
  
  let finalString = '';

  words.map( (word, i) => {
      if(i !== 0 && i!==(words.length)){ finalString += ' ' }
      if(word.includes(".") || word.includes("/")){
          finalString += word.toUpperCase();
      }
      else{
          finalString += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      }
      return false;
  })

  return finalString;

};


const SemisForm = ({preowned}) => {

  const [dissableButton,setDissableButton] = useState(false)
  
  const defaultData = {
    name: "",
    email: "",
    phone: "",
    carType:'seminuevo',
    version:preowned.version,
    downPayment: 0,
    timeFrame: 0,
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

  const { name, email, phone, downPayment } = formData;

  const { enqueueSnackbar } = useSnackbar();

  const onHandleSubmit = async(e) => {
    e.preventDefault();
    setDissableButton(true);

    if(formData.store === null || formData.store === undefined){
      setDissableButton(false);

      return enqueueSnackbar("Por favor selecciona otra agencia", {
        variant: "error",
      });
    }

    let tiempoFinal = moment(0).format();

    if(parseInt(formData.timeFrame, 10) === 0){
      tiempoFinal = moment(0).format()
    }
    if(parseInt(formData.timeFrame, 10) === 1){
      tiempoFinal = moment().add(1, 'month').format()
    }
    if(parseInt(formData.timeFrame, 10) === 2){
      tiempoFinal = moment().add(2, 'months').format()
    }
    if(parseInt(formData.timeFrame, 10) === 3){
      tiempoFinal = moment().add(3, 'months').format()
    }

    let emailValidation = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let phoneValidation = new RegExp(/^[0-9]{10}$/);
    let downPaymentValidation = new RegExp(/^[0-9]+$/);

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
      
      await sendLead({...formData, timeFrame: tiempoFinal });

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
        await axios.post(
        "https://dealerproxapi.com/api/v1/leads/website",
        // "http://localhost:5001/api/v1/leads/website",
        lead,
        config
      );
      setFormData(defaultData)
    } catch (err) {
    }
  };

  const onHandleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });


  return (
    
    <form onSubmit={onHandleSubmit}>
      <Box
        style={{ padding: 20, borderRadius: 10, marginBottom: 10, border: "1px solid #dbf2ff", flexDirection: "column", borderColor: "#e2e2e2"}}>
        

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
          style={{
            marginBottom: 10,
            border: "1px solid #dbf2ff",
            borderRadius: 10,
          }}
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            label={'¿En cuanto tiempo deseas comprar la unidad?'}
            name="timeFrame"
            onChange={onHandleChange}
            select
            variant="outlined"
            SelectProps={{ native: true }}
            style={{
              marginBottom: 10,
              border: "1px solid #dbf2ff",
              borderRadius: 10,
            }}
          >
            {timeFrames && timeFrames.map(timeFrame => (
              <option key={timeFrame.id} value={timeFrame.id}>
                {timeFrame.value}
              </option>
            ))}
          </TextField>
        </Box>

        <Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          disabled={dissableButton}
          style={{height:"3rem", marginBottom: '1em'}}
          >
          Cotizar
          </Button>
          {/* <Box display='flex' flexDirection={'row'} justifyContent='center'>

            <Divider style={{marginTop: 20, marginBottom: 20, width: '48%'}}/>
            <Typography variant='caption' color='textSecondary' style={{marginLeft: 5, marginRight: 5, marginTop: 10}}>o</Typography>
            <Divider style={{marginTop: 20, marginBottom: 20, width: '48%'}}/>
          </Box> */}
          <center>
            <Typography variant='caption' color='textPrimary' style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
              O si lo prefieres, envíanos WhatsApp!
            </Typography>
          </center>
          {
            preowned.store && preowned.store.dpxStore &&
            <a 
              target='_blank'
              rel="noreferrer"
              href={ `https://wa.me//${preowned.store.dpxPhone}?text=Hola! Estoy interesado en un ${preowned.version.toLowerCase().includes(preowned.vehicle.make.name.toLowerCase()) ? `${CapitalizeNames(preowned.version)} ${preowned.year}` : 
                `${CapitalizeNames(preowned.vehicle.make.name)} ${CapitalizeNames(preowned.vehicle.model)} ${CapitalizeNames(preowned.version)} ${preowned.year}`
                }          
              `}
              style={{textDecoration: 'none'}}
            >
              {/* <center>
              <Typography variant='caption' color='textPrimary' style={{display: 'flex', alignItems: 'center', justifyContent:'center', color: '#32873c'}}>
              O si lo prefieres, envíanos WhatsApp! <img src="/static/whatsapp.png" width={30} style={{marginLeft: 10}}/>
              </Typography>
              </center> */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{height:"3rem", backgroundColor: '#48c357', marginTop: '1em'}}
              >
              Whatsapp
            </Button>
  
            </a>
          }
        </Box>

    </Box>
    </form>
  )
}

export default SemisForm;