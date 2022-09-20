import React, { Fragment } from 'react'
import { TextField, Box, Typography, IconButton, Button } from '@mui/material';
import AddContact from '@mui/icons-material/PersonAddAlt';

import {  styled } from '@mui/material/styles';
import { Call } from '@material-ui/icons';

const PhoneNumberField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    border: 'none',
    backgroundColor: '#eceaf7',
    borderRadius: 40,
    width: 250,
    color: '#666',
    fontSize: 20,
    fontWeight: 200,
    '& fieldset': {
      border: 'none',
    }
  },
});

export default function Teclado() { 

  const styles = {
    button: {
      width: 64,
      height: 64,
      backgroundColor:"#eceaf7",
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
    },
    keyboard: {
      marginTop: '1em',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '1em',
      width: 250,
    },
    text: {
      color: '#333'
    }
  }
  return (
    <Box px={5} pt={2} display='flex' flexDirection='column' justifyContent='center' sx={{position: 'relative'}}>
      <Box pb={1}>
        <center>
          <Typography>Contactos</Typography>
        </center> 
        <IconButton style={{position: 'absolute', top: 5, right: 5, backgroundColor: "#51a16d"}}>
            <AddContact style={{color:"#FFFFFF"}} />
        </IconButton>
      </Box>

      <Box sx={styles.keyboard}>
        <PhoneNumberField 
          placeholder='+52 00 0000 0000'
          sx={{input: {textAlign: "center"}, marginBottom: '1em'}}
        />

        <Box sx={styles.row}>
          <Button sx={styles.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
            <Typography sx={styles.text} variant='body1'>1</Typography>
            <Typography sx={styles.text} variant='caption'>&nbsp;</Typography>
          </Button>
          <Button sx={styles.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
            <Typography sx={styles.text} variant='body1'>2</Typography>
            <Typography sx={styles.text} variant='caption'>ABC</Typography>
          </Button>
          <Button sx={styles.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
            <Typography sx={styles.text} variant='body1'>3</Typography>
            <Typography sx={styles.text} variant='caption'>DEF</Typography>
          </Button>
        </Box>
        <Box sx={styles.row}>
          <Button sx={styles.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
            <Typography sx={styles.text} variant='body1'>4</Typography>
            <Typography sx={styles.text} variant='caption'>GHI</Typography>
          </Button>
          <Button sx={styles.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
            <Typography sx={styles.text} variant='body1'>5</Typography>
            <Typography sx={styles.text} variant='caption'>JKL</Typography>
          </Button>
          <Button sx={styles.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
            <Typography sx={styles.text} variant='body1'>6</Typography>
            <Typography sx={styles.text} variant='caption'>MNO</Typography>
          </Button>
        </Box>
        <Box sx={styles.row}>
          <Button sx={styles.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
            <Typography sx={styles.text} variant='body1'>7</Typography>
            <Typography sx={styles.text} variant='caption'>PQRS</Typography>
          </Button>
          <Button sx={styles.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
            <Typography sx={styles.text} variant='body1'>8</Typography>
            <Typography sx={styles.text} variant='caption'>TUV</Typography>
          </Button>
          <Button sx={styles.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
            <Typography sx={styles.text} variant='body1'>9</Typography>
            <Typography sx={styles.text} variant='caption'>WXYZ</Typography>
          </Button>
        </Box>
        <Box sx={styles.row}>
          <Button sx={styles.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
            <Typography sx={styles.text} variant='body1'>*</Typography>
            <Typography sx={styles.text} variant='caption'>&nbsp;</Typography>
          </Button>
          <Button sx={styles.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
            <Typography sx={styles.text} variant='body1'>0</Typography>
            <Typography sx={styles.text} variant='caption'>+</Typography>
          </Button>
          <Button sx={styles.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
            <Typography sx={styles.text} variant='caption'>#</Typography>
            <Typography sx={styles.text} variant='caption'>&nbsp;</Typography>
          </Button>
        </Box>
        <Box>
          <Button sx={{ ...styles.button, backgroundColor: '#51a16d' }} style={{backgroundColor: '#51a16d', borderRadius:"50%"}}>
            <Call style={{color:"#fff"}} />
          </Button>
        </Box>
    
      </Box>
          
    </Box>
  )
}
