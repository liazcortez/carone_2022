import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from './Tabs'
import Teclado from './Teclado'

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
      width: '60%'
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
          </Box>
          <Box sx={styles.content} p={1}>Contenido 3</Box>
        </Box>
      </Box>

    </Box>
  )
}
export default Index;