import React, {useEffect} from "react";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import { useSnackbar } from "notistack";
import useAuth from '../../hooks/useAuth';
import useApplicant from '../../hooks/useApplicant';
import DropzoneInput from '../../components/DropzoneInput';
import Image from 'next/image'

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
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400,
    // width:'100%',
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
  flexEnd:{
    justifyContent:'flex-end',
    display:'flex',
    alignItems:'center',
    marginTop:'.5rem'
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
  image: {
    width: 50
  },
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

const [lock, setLock] = React.useState(false);

const {user,loading,error, createResume,deleteResume} = useAuth();
const {createApplicant} = useApplicant();


const handleSubmit = async ()=>{
// crear state de applicant
setSubmit(true);
 if(user && user.resume){
   deleteResume();
 }else{
  if(file && user){
    createResume({
    file:file[0],
    _id:user._id,
    });
  }
 }


};


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
          <CardContent style={{width:width}} className={classes.cardContent}>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-between"
              mb={0}
            >
              <div>
                <Typography color="textPrimary" gutterBottom variant="h6">
                Agregar Documentación
                {/* {job && job.title?'para' + job.title:''} */}
                </Typography>
              </div>
              {/* <div className={classes.currentMethodIcon}>
                <img alt="Auth method" src={methodIcons['JWT']} />
              </div> */}
            </Box>
            <Box flexGrow={1} mt={3}>
              <DropzoneInput 
                files={file}
                types={'application/pdf, application/msword, application/vnd.ms-powerpoint'}
                setFiles={setFile}
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
                  <Box m={2}>
                  <Typography gutterBottom variant="h6" color='textPrimary'>
                    Selecciona tu curriculum
                  </Typography>
                    <Typography variant="caption" color='textSecondary'>
                      Selecciona tu archivo o
                      {' '}
                      <Link underline="always">Busca</Link>
                      {' '}
                      uno en tu computadora
                    </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" color='textSecondary' style={{fontSize: 9}}>
                          ( Archivos válidos pdf, xslm, word, pp )
                      </Typography>
                    </Box>
                </div>
                </>
                }
              />
                      {/* <DropzoneArea
                        showPreviews={true}
                        showAlerts={false}
                        showPreviewsInDropzone={false}
                        useChipsForPreview
                        previewGridProps={{container: { spacing: 1, direction: 'row' }}}
                        previewChipProps={{classes: { root: classes.previewChip } }}
                        previewText="Documentos"
                        dropzoneText="Arrastre y suelte un archivo o haga clic aquí"
                        onChange={(files)=>files.length >= 1? setFile(files[0]):''}
                        onDelete={()=>{setFile(false)}}
                        filesLimit={1}
                      >
                        que onda
                        </DropzoneArea> */}
              {/* {!login ? <Login/>:<Register/>} */}
              {/* <JWTLogin /> */}
            </Box>
            {/* <Box my={3}>
              <Divider />
            </Box>
            <Link
              component={RouterLink}
              to="/register"
              variant="body2"
              color="textSecondary"
            >
              {t("Login.NewAccount")}
            </Link> */}

            <CardActions className={classes.flexEnd}>
            {(user && user.resume)?<Button 
            onClick={()=>{handleSubmit()}}
            color="primary"
            disabled={loading || submit}
            
            size="large"
            type="submit"
            variant="contained"
            >Eliminar</Button>:<Button 
            onClick={()=>{handleSubmit()}}
            color="primary"
            disabled={!file || loading || submit}
            
            size="large"
            type="submit"
            variant="contained"
            >Enviar</Button>}
            </CardActions>

          </CardContent>
        </Card>
  );
};

export default ApplicantComponent;