import React, { Fragment, useEffect, useState} from 'react';
import { makeStyles, withStyles } from '@mui/styles';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';
import Meta from "../../components/Meta";
import useMake from "../../hooks/useMake";
import useStore from "../../hooks/useStore";
import {
  Container,
  Step,
  StepLabel,
  StepConnector,
  Typography,
  Stepper,
  Button,
  Divider,
  Box,
  Grid,
  TextField,
  TextareaAutosize,
} from '@mui/material'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { capitalCase } from 'change-case';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import FilesDropzone from '../../components/FileDropzone';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#556BD6',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#556BD6',
    zIndex: 1,
    fontSize: 22,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  inputLabel: {
    ...theme.typography.body2,
    color: '#707070',
    fontWeight: 300,
    fontSize: 14,
    marginBottom: 5
  },
  textarea: {
      border: `solid #bcbdbf 1px`,
      ...theme.typography.body1,
      color: theme.palette.text.primary,
      outline: 'none',
      resize: 'none',
      padding: 10,
      width: '100%',
      borderRadius: 5,
      backgroundColor: theme.palette.background.paper,
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    width: 50,
    height: 50,
    margin: 0
  }
}));

const StepperView = ({...rest}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    'Cuentanos más sobre la unidad',
    'Agencia de tu preferencia',
    '¿Tienes algún comentario extra relevante de la unidad?',
    '¿Con quien nos debemos poner en contacto?',
    'Una imagen puede ayudar!'
  ];
  const { getMakes, makes } = useMake()
  const { getStores, stores } = useStore()
  const [files, setFiles] = useState(null);
  const [urls,setUrls] = useState([]);

  useEffect(()=>{
    getMakes()
    getStores()
    //eslint-disable-next-line
  },[])
  
  const QontoStepIcon = (props) => {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
        })}
      >
        {completed ? <Check className={classes.completed} /> : 
        active ? <DirectionsCarIcon className={classes.completed} /> :  <div className={classes.circle} />}
      </div>
    );
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  useEffect(()=>{
    if(files){
      let arrayUrls =[]
      files.map(item=>arrayUrls.push(URL.createObjectURL(item)))
      setUrls(arrayUrls)

      console.log(arrayUrls)
    }
   },[files])
   const handleSubmitFile = () =>{
      urls.map(item => URL.revokeObjectURL(item))
      setUrls([])
  }

  return (
    <>
    <Meta
        title={`¡Compramos tu auto!`}
        description={`Compramos tu auto`}
    />
      <Container maxWidth="lg" style={{height: '80vh'}}>
        <Divider />
        <Box display='flex' flexDirection='column' justifyContent='center' style={{height: '100%'}}>
          <Formik
            initialValues={{
              make: '',
              model: '',
              kilometers: '',
              year: '',
              description: '',
              state: '',
              store: '',
              name: '',
              email: '',
              phone: '',
            }}
            validationSchema={Yup.object().shape({
              model: Yup.string().max(255).required('Modelo es requerido'),
              kilometers: Yup.string().max(255).required('Modelo es requerido'),
              year: Yup.number().required('Año del modelo es requerido'),
              state: Yup.string().required('Estado es requerido'),
              name: Yup.string().max(255).required('Nombre es requerido'),
              email: Yup.string().email('Ingresa por favor un correo válido').max(255).required('El correo es requerido'),
              phone: Yup.string().matches(/^[0-9]+$/, 'Ingresa un teléfono válido').test('max length', 'El télefono solo puede contener 10 dígitos', val => val && val.length === 10),
            })}
            // onSubmit={async (values, {
            onSubmit={ (values, {
              setErrors,
              setStatus,
              setSubmitting
            }) => {
              try {
              //codigo

                if (isMountedRef.current) {
                  if(!error){
                    setStatus({ success: true });
                    setSubmitting(false);
                  }
                }
                
              } catch (err) {
                if (isMountedRef.current) {
                  setStatus({ success: false });
                  setErrors({ submit: err.error });
                  setSubmitting(false);
                }
              }
            }}
          >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values
          }) => (
            <form noValidate onSubmit={handleSubmit} className={clsx(classes.root)} {...rest}>
              <Box display='flex' justifyContent='center' mb={0}>
                <Typography variant='h4'>{steps[activeStep]}</Typography>
              </Box>
              <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />} style={{marginBottom: '2em', marginTop: '2em'}}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
                  </Step>
                ))}
              </Stepper>
              
              <Grid container spacing={3} style={{paddingRight: 160, paddingLeft: 160}}>
              {
                activeStep === 0 && 
                <Fragment>
                  <Grid item sm={12} md={6}>
                    <TextField
                      error={Boolean(touched.make && errors.make)}
                      fullWidth
                      helperText={touched.make && errors.make}
                      name="make"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder='Selecciona una marca'
                      value={values.make}
                      variant="outlined"
                      select
                      SelectProps={{native:true}}
                    >
                      <option value={''} kay={''}>{'Selecciona una Marca'}</option>
                      {
                        makes && makes.map(item =>
                          <option key={item._id} value={item._id}>{capitalCase(item.name)}</option>
                        )
                      }
                    </TextField>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <TextField
                      fullWidth
                      error={Boolean(touched.model && errors.model)}
                      helperText={touched.model && errors.model}
                      label={'Modelo'}
                      name="model"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.model}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <TextField
                      error={Boolean(touched.year && errors.year)}
                      fullWidth
                      helperText={touched.year && errors.year}
                      label={'Año'}
                      name="year"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.year}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <TextField
                      error={Boolean(touched.kilometers && errors.kilometers)}
                      fullWidth
                      helperText={touched.kilometers && errors.kilometers}
                      // label={'Kilometraje'}
                      name="kilometers"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.kilometers}
                      variant="outlined"
                      select
                      SelectProps={{native:true}}
                    >
                      <option value={''}>{'Selecciona un Kilometraje'}</option>
                      <option value={1}>1 a 50,000 kms</option>
                      <option value={2}>50,0001 a 100,000 kms</option>
                      <option value={3}>100,000 a 150,000 kms</option>
                    </TextField>
                  </Grid>
                  <Grid item sm={12}>
                    <Box mt={5} display='flex' flexDirection={'row-reverse'}>
                      <Button color='primary' variant='contained' onClick={handleNext} style={{minWidth: '15ch'}}>Siguiente</Button>
                    </Box>
                  </Grid>
                </Fragment>
              }
              {
                activeStep === 1 &&
                <Fragment>
                  <Grid item sm={12}>
                    <TextField
                      error={Boolean(touched.store && errors.store)}
                      fullWidth
                      helperText={touched.store && errors.store}
                      // label={'Agencia de tu preferencia'}
                      name="store"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.store}
                      variant="outlined"
                      select
                      SelectProps={{native:true}}
                    >
                      <option value={''}>{'Selecciona una Agencia'}</option>
                      {
                        stores && stores.map(item =>
                          <option key={item._id} value={item._id}>{capitalCase(item.make.name + ' ' + item.name)}</option>
                        )
                      }
                    </TextField>
                  </Grid>
                  <Grid item sm={12}>
                    <Box mt={5} display='flex' justifyContent='space-between'>
                      <Button color='primary' variant='contained' onClick={handleBack} style={{minWidth: '15ch'}}>Atrás</Button>
                      <Button color='primary' variant='contained' onClick={handleNext} style={{minWidth: '15ch'}}>Siguiente</Button>
                    </Box>
                  </Grid>
                </Fragment>
              }
              {
                activeStep === 2 &&
                <Fragment>
                  <Grid item sm={12}>
                    <Typography className={classes.inputLabel}>Descripción</Typography>
                    <TextareaAutosize
                      error={touched.description && errors.description}
                      name="description"
                      className={classes.textarea}
                      placeholder={'Ingrese algún comentario relevante con el cliente'}
                      minRows={5}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.description}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Box mt={5} display='flex' justifyContent='space-between'>
                      <Button color='primary' variant='contained' onClick={handleBack} style={{minWidth: '15ch'}}>Atrás</Button>
                      <Button color='primary' variant='contained' onClick={handleNext} style={{minWidth: '15ch'}}>Siguiente</Button>
                    </Box>
                  </Grid>
                </Fragment>
              }
              {
                activeStep === 3 &&
                <Fragment>
                  <Grid item sm={12} md={12}>
                    <TextField
                      error={Boolean(touched.name && errors.name)}
                      fullWidth
                      helperText={touched.name && errors.name}
                      label={'Nombre Completo'}
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <TextField
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      helperText={touched.email && errors.email}
                      label={'Correo Eletrónico'}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <TextField
                      error={Boolean(touched.phone && errors.phone)}
                      fullWidth
                      helperText={touched.phone && errors.phone}
                      label={'Teléfono (10 Dígitos)'}
                      name="phone"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Box mt={5} display='flex' justifyContent='space-between'>
                      <Button color='primary' variant='contained' onClick={handleBack} style={{minWidth: '15ch'}}>Atrás</Button>
                      <Button color='primary' variant='contained' onClick={handleNext} style={{minWidth: '15ch'}}>Siguiente</Button>
                    </Box>
                  </Grid>
                </Fragment>
              }
              {
                activeStep === 4 &&
                <Fragment>
                  <Grid item sm={12} md={12}>
                  <Grid container spacing={2}>
                      {
                        urls.map((image, index)=>
                        <Grid item xs={6} sm={6} md={2}>
                         <img key={index} name="media" src={image} width={120} height={120}/>
                        </Grid> 
                        )
                      }

                    </Grid>
                   </Grid>
                    <Grid item xs={12}>
                      <FilesDropzone
                        content={<Button variant="contained" color="secondary" >Cargar Archivo</Button>}
                        customFunction={setFiles}
                      />
                    </Grid>
                    <Grid item sm={12}>
                    <Box mt={5} display='flex' justifyContent='space-between'>
                      <Button color='primary' variant='contained' onClick={handleBack} style={{minWidth: '15ch'}}>Atrás</Button>
                      <Button color='primary' variant='contained' type='submit'>Finalizar</Button>
                    </Box>
                  </Grid>
                </Fragment>
              }
              </Grid>
            </form>
          )}
          </Formik>
        </Box>

      </Container>
    </>
  );
}

export default StepperView;