import React from 'react';
import {
  Modal,
  Card
} from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Login from './LoginNav'
import Register from './RegisterNav';

const classes = {
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    width: '50ch',
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100ch',
  },
};

const DialogAuth = ({setOpen, open, className, ...rest }) => {

  const { success } = useAuth();
  const [type, setType] = React.useState('login')
  
  React.useEffect(()=>{
    if(success){
      setOpen(false);
    }
  },[success])
  
  return (
    <Modal
      style={{zIndex: 5}}
      onClose={()=>setOpen(false)}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <Card className={classes.root}>
      {
        type === 'login' ?
        <Login setOpen={setOpen} setType={setType}/> :
        <Register setType={setType}/>
      }
      </Card>
    </Modal>
  );
};

export default DialogAuth;