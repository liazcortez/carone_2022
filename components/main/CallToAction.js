import React from 'react';

import { 
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    makeStyles
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {},
    button: {
        borderRadius: 30,
        padding: 10,
        minWidth: 180,
        height: 55,
    },
    card: {
        // boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.1);',
    },
    blue: {
        color: 'white'
    },
    white: {
    },
    gray: {
        backgroundColor: '#f3f2f5',
    }
}))

const Calltoaction = ({ color = 'white', ...rest }) => {
    const classes = useStyles()

    return (
        <Card className={clsx(classes[color], classes.card)} elevation={0} {...rest}>
            <CardContent>
                <Box display='flex' justifyContent='space-between' px={10}>
                    <Box pr={10}>
                        <center>
                        <h1 style={{margin: 0}}><span style={{ color: color !== 'blue' ? '#00428A' : '#fff', fontWeight: 700, fontSize: 32 }}>C</span>ar One Compra tu auto!</h1>
                        <Typography variant='caption' style={{fontSize: 16}}>
                            SIN TRABAS - SIN FRAUDES - SIN PREOCUPACIONES
                        </Typography>
                        </center>
                    </Box>
                    <Box display='flex' alignContent='center' alignItems='center' >
                        <Button variant='contained' color='primary' className={classes.button}>
                            Vender tu auto
                        </Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default Calltoaction;
