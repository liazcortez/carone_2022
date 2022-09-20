import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from './Tabs'
import Teclado from './Teclado'
import Detalles from './Detalles'
import Historial from './Historial'
import Dethistorial from './Dethistorial'
import Mensajes from './Mensajes'
import Detmensajes from './Detmensajes'

const Index = () => {

  const [value, setValue] = useState(0)

  const styles = {
    mainContainer: {
      minHeight: 550,
      display: 'flex',
      backgroundColor: '#1e3583',
      borderRadius: '40px 0px 0px 40px',
    },
    secondaryContainer: {
      height: '100%',
    },
    panel: {
      backgroundColor: '#f8f7ff', 
      width: '40%',
      borderRadius: '40px 0px 0px 40px',
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      backgroundColor: '#fff', 
      width: '60%',
      padding:"0px",
      margin:"0px"
    },
    tabs: {
      display: 'flex',
      alignItems: 'center',
    }
  }

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.tabs}>
        <Tabs value={value} setValue={setValue}/>
      </Box>
      
      <Box flexGrow={1}>
        <Box display='flex' sx={styles.secondaryContainer}>
          <Box sx={styles.panel} p={1}>
            { value === 0 && <Teclado /> }
            { value === 1 && <Historial /> }
            { value === 2 && <Mensajes /> }
          </Box>
          <Box sx={styles.content} p={1}>
            {value === 0 && <Detalles/>}
            { value === 1 && <Dethistorial /> }
            { value === 2 && <Detmensajes /> }
            </Box>
        </Box>
      </Box>

    </Box>
  )
}
export default Index;