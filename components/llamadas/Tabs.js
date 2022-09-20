import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppsIcon from '@mui/icons-material/Apps';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ModeCommentIcon from '@mui/icons-material/ModeComment';



const Tabcom = ({ value = 0, setValue = () => {} }) => {

    const handleChange = (e,v) => setValue(v)

    const styles = {
        tab: {
            width: 150, 
            height: 100, 
            color:"#FFFFFF", 
            fontSize:"12px"
        }
    }

    return (
        <Tabs
            orientation="vertical"
            value={value}
            selectionFollowsFocus
            onChange={handleChange}
            style={{color:"#FFFFFF"}}
        >
            <Tab icon={<AppsIcon style={{fontSize:"15px", color:"#FFFFFF"}}/>} label="Marcador" sx={styles.tab} />
            <Tab icon={<AccessTimeIcon style={{fontSize:"15px", color:"#FFFFFF"}}/>} label="Recientes" sx={styles.tab} />
            <Tab icon={<ModeCommentIcon style={{fontSize:"15px", color:"#FFFFFF"}}/>} label="Mensajes" sx={styles.tab}/>
        </Tabs>
    )
}
export default Tabcom;