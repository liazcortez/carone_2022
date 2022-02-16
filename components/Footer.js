import React from "react";
import { Container,Link} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme=>({
  footer:{
        // gap: '1rem',
        display: 'grid',
        marginTop: '40px',
        marginBottom: '20px',
        gridTemplateColumns: 'repeat(auto-fill,minmax(15rem,1fr))',
        gridColumn: 'revert'
  },
  policy:{
    color:'black!important',
    textDecoration:'none'
  }
  }));

const Footer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.footer} style={{ marginTop: 40, marginBottom: 20 }}>
      <div className="bg-gray-100 container mx-auto px-6 pt-10 pb-6">
        © Car One Group. All rights reserved.
      </div><div>
      <Link className={classes.policy} href={'/politicas'}>
      Términos y Condiciones
      </Link>
      </div>      
    </Container>
  );
};

export default Footer;
