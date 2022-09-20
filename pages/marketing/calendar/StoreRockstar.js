import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useMake from './../../../hooks/useMake';
import useAuth from './../../../hooks//useAuth';
import { capitalCase } from 'change-case';
import useVehicle from './../../../hooks//useVehicle';
import useStore from './../../../hooks//useStore';
import {
  Grid,
  TextField
} from '@mui/material';

import {
  makeStyles,
} from '@material-ui/core';

import sortNames from './../../../utils/sortNames';

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white
  }
}));

const UpdateDelete = ({ params, setParams, className, ...rest }) => {
  const classes = useStyles();
  const { getMakes, makes } = useMake();
  const { getStores, stores } = useStore();
  const { user } = useAuth();
  const t = (t)=>t;
  const [firstLoad, setFirstLoad] = useState(false);

  // const [vehicleMake,setVehicleMake] = useState({value:'',text:''});

  const [currentStores, setCurrentStores] = useState([]);

  const status = [{_id:'review',name:t('Design.review')},{_id:'approved',name:t('Design.approved')},{_id:'modified',name:t('Design.modified')}];

  useEffect(() => {
    getMakes();
    getStores();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    let userStores = [];

    let sortedStores  = stores.sort((a, b) =>sortNames(a, b));
    if (user && user.role && user.role === 'rockstar')userStores =sortedStores;
    else if (user && user.makes && user.role === 'admin marketing digital') {
      user.makes.forEach(make => {
        let currentStores = sortedStores.filter(store => make._id === store.make._id);
        userStores = [...userStores, ...currentStores];
      });
    }
    else if (user && user.makes && user.role) {
      // sortedStores = sortedStores.filter()
      user.stores.forEach(userStore => {
        let currentStores = sortedStores.filter(store => userStore._id._id === store._id);
        userStores = [...userStores, ...currentStores];
      });
    }


    //  newSelects.make = makes
    //     .filter(make => make.isShown)
    //     .map(make => {
    //       return {
    //         ['_id']: make.id,
    //         name: `${make.name}`.replace('-', ' ')
    //       };
    //     })
    //     .sort((a, b) =>sortNames(a, b));
      userStores = userStores.map(stores=>stores).sort((a, b) =>sortNames(a, b,['make','name']))

      setCurrentStores(userStores);
    //eslint-disable-next-line
  }, [user, stores]);

  return (
    <Grid container style={{margin:'1rem 0'}}>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          onChange={e => {
            // setStore(e.target.value)
            setParams({
              ...params,
              ['store__id']: e.target.value,
              searching: true
            });
          }}
          select
          value={params?.store}
          variant="outlined"
          SelectProps={{ native: true }}
          // disabled={make === ''}
        >
          <option key={0} value={''}>
            {t('Selecciona una Agencia')}
          </option>
          {currentStores.map(store => (
            <option key={store._id} value={store._id} storeName={store.name}>
              {capitalCase(`${store.make.name} ${store.name}`)}
            </option>
          ))}
        </TextField>
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          onChange={e => {
            // setStore(e.target.value)
            setParams({
              ...params,
              ['status']: e.target.value,
              searching: true
            });
          }}
          select
          value={params?.status}
          variant="outlined"
          SelectProps={{ native: true }}
          // disabled={make === ''}
        >
          <option key={0} value={''}>
            {t('Selecciona un Status')}
          </option>
          {status.map(status => (
            <option key={status._id} value={status._id} storeName={status.name}>
              {status.name}
            </option>
          ))}
        </TextField>
      </Grid> */}
    </Grid>
  );
};

UpdateDelete.propTypes = {
  className: PropTypes.string
};

export default UpdateDelete;
