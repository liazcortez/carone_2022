import React, { Fragment } from "react";
import { Container } from "@mui/material";
import useStore from '../../hooks/useStore';
import parse from "html-react-parser";
import { Typography } from "@material-ui/core";
import { CapitalizeV2 } from "../../utils/capitalize";

const index = () => {

  const { policies, getPolicies } = useStore()
  
  React.useEffect(()=>{
    getPolicies()
    //eslint-disable-next-line
  },[])

  return (
    <Container maxWidth="lg">
      {
        policies.map(item => 
          <Fragment>
            <Typography variant='h6'>{CapitalizeV2(item.name)}</Typography>
            {parse(item.policy)}
          </Fragment>
        )
      }
    </Container>
  );
};

export default index;
