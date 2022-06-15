import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
// import { useTranslation } from 'react-i18next';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@mui/styles';

const useStyles =  makeStyles(theme=>({
  centerButtons:{
    display:'flex',
    justifyContent:'center'
  }
}));


const YesNo = ({ open, handleClose, message }) => {
  // const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">{message}</DialogTitle>
      <DialogActions className={classes.centerButtons}>
        <Button
          autoFocus
          onClick={() => {
            handleClose('no');
          }}
          key={'no'}
          color="primary"
        >
          Cancelar
          {/* {t('Buttons.Disagree')} */}
        </Button>
        <Button
          onClick={() => {
            handleClose('yes');
          }}
          key={'yes'}
          color="primary"
          autoFocus
        >
          Aceptar
          {/* {t('Buttons.Agree')} */}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// YesNo.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
// };

export default YesNo;
