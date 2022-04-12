import React, {useEffect,useState} from "react";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Typography,
  makeStyles,
  Button,
  IconButton
} from '@material-ui/core';
import { useSnackbar } from "notistack";
import useAuth from '../../hooks/useAuth';
import useApplicant from '../../hooks/useApplicant';
import DropzoneInput from '../../components/DropzoneInput';
import { FileText, Trash2} from 'react-feather'
import Image from 'next/image'
import YesNoDialog from '../../components/Confirm';

const methodIcons = {
  Auth0: '/static/images/auth0.svg',
  FirebaseAuth: '/static/images/firebase.svg',
  JWT: '/static/images/jwt.svg'
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  banner: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  bannerChip: {
    marginRight: theme.spacing(2)
  },
  methodIcon: {
    height: 30,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80
  },
  cardContent: {
    position:'relative',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '40rem'
  },
  currentMethodIcon: {
    height: 60,
    '& > img': {
      width: 'auto',
      maxHeight: '100%'
    }
  },
  rightText: {
    float: 'right'
  },
  flexEnd:{
    justifyContent:'flex-end',
    display:'flex',
    alignItems:'center'
  },
  previewChip: {
    minWidth: 160,
    maxWidth: 210
  },
  dropZone: {
    height: 250,
    width: "100%",
    padding: theme.spacing(3),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    border: `1px dashed ${theme.palette.divider}`,
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      opacity: 0.5,
      cursor: 'pointer'
    }
  },
  documentLoaded:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '7.5rem',
    margin: '1.5rem',
    marginBottom:'.5rem'
  },
  image: {
    width: 30
  },
  trash:{
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    color:'#d32f2fc4'
  }
}));

const ApplicantComponent = ({job=false,setOpen=false,setModalPostulated=false,width='50vw'}) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const t = (translate)=>{
    let res = translate.split('.');
    return res[1];
  };

const [submit, setSubmit] = React.useState(false);

const [file,setFile] = React.useState(null);
const [update,setUpdate]=React.useState(false);

const [lock, setLock] = React.useState(false);

const {user,loading,error, createResume,deleteResume} = useAuth();
const {createApplicant} = useApplicant();
const [openModal,setOpenModal]= useState(false);


const handleSubmit = async ()=>{
// crear state de applicant
if(!update && user.resume){
setUpdate(true);
}else{
  setSubmit(true);
setUpdate(false);
  if(file && user){
    createResume({
    file:file[0],
    _id:user._id,
    });
  }
}
};

const handleDelete= async(action)=>{
  if(action === 'yes'){
    await deleteResume();
    (!error)? enqueueSnackbar('Documento Eliminado', {
      variant: 'success'
    }):
    enqueueSnackbar('Error', {
      variant: 'error'
    });
  }

  setOpenModal(false);
}


useEffect(()=>{

  if(submit && !error){
    enqueueSnackbar('Documento actualizado', {
      variant: 'success'
    });
    if(job){
      createApplicant({user:user._id,job:job});
      enqueueSnackbar('Postulado correctamente', {
        variant: 'success'
      });
    }
    
    if(setModalPostulated){
      setModalPostulated(true);
    }
    if(setOpen){
    setOpen(false);
    } 
    setSubmit(false);
  }
  //eslint-disable-next-line
},[user]);

return (
  <Card>
    <YesNoDialog 
     handleClose={handleDelete}
     open={openModal}
     setOpen={setOpenModal}
     message={'Eliminar Curriculum'}
    />
    <CardContent className={classes.cardContent}>
      <Box>
        {user && user.resume && !update ? (
          <Box className={classes.documentLoaded}>
            <IconButton 
            className={classes.trash}
              aria-label="delete cv"
              component="span"
              onClick={()=>{
                setOpenModal(true)
              }}
            >
              <Trash2/>
            </IconButton>
            <FileText size={50} />
            <Typography color="textSecondary">
              Documento cargado correctamente
            </Typography>
          </Box>
        ) : (
          <DropzoneInput
            files={file}
            setFiles={setFile}
            types={
              "application/pdf, application/vnd.ms-excel, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-powerpoint"
            }
            content={
              <>
                <div>
                  <Image
                    width={80}
                    height={80}
                    alt="Select file"
                    className={classes.image}
                    src="/static/images/undraw_add_file2_gvbb.svg"
                  />
                </div>
                <div>
                  <Box>
                    <Typography variant="caption" color="textSecondary">
                      Selecciona tu archivo o{" "}
                      <Link underline="always">Busca</Link> uno en tu
                      computadora
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      style={{ fontSize: 9 }}
                    >
                      ( Archivos válidos pdf, xslm, word, pp )
                    </Typography>
                  </Box>
                </div>
              </>
            }
          />
        )}
      </Box>

      <Box mt={2} display="flex">
        {user && user.resume && !update ? (
          <Box display="flex">
            <a
              href={user.resume}
              download
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                color="primary"
                disabled={loading}
                size="large"
                type="submit"
                variant="contained"
              >
                Descargar
              </Button>
            </a>
          </Box>
        ) : (
          user &&
          user.resume && (
            <Box display="flex">
              <Button
                color="primary"
                onClick={() => {
                  setUpdate(false);
                }}
                disabled={loading}
                size="large"
                type="submit"
                variant="contained"
              >
                Cancelar
              </Button>
            </Box>
          )
        )}
        <Box flexGrow={1} />

        <Box display="flex">
          <Button
            onClick={() => {
              handleSubmit();
            }}
            color="primary"
            disabled={loading || ((update || !user.resume) && !file)}
            size="large"
            type="submit"
            variant="contained"
          >
            {!update && user.resume ? "Actualizar" : "Guardar"}
          </Button>
        </Box>
      </Box>
    </CardContent>
  </Card>
);
};

export default ApplicantComponent;