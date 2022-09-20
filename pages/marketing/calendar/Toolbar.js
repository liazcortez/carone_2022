import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
  Grid,
  Hidden,
  IconButton,
  Tooltip,
  Typography,
  makeStyles
} from '@material-ui/core';
import ViewConfigIcon from '@material-ui/icons/ViewComfyOutlined';
import ViewWeekIcon from '@material-ui/icons/ViewWeekOutlined';
import ViewDayIcon from '@material-ui/icons/ViewDayOutlined';
import ViewAgendaIcon from '@material-ui/icons/ViewAgendaOutlined';
import _ from 'lodash';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Toolbar = ({
  className,
  date,
  onDateNext,
  onDatePrev,
  onDateToday,
  onAddClick,
  onViewChange,
  events=[],
  loading=false,
  view,
  ...rest
}) => {
  const classes = useStyles();
  const t = (t)=>t;
  const [totals, setTotals] = useState({
    prev: 0,
    today: 0,
    next: 0
  })

  const viewOptions = [
    {
      label: 'Mensual',
      value: 'dayGridMonth',
      icon: ViewConfigIcon
    },
    {
      label: 'Semanal',
      value: 'timeGridWeek',
      icon: ViewWeekIcon
    },
    {
      label:'Diario',
      value: 'timeGridDay',
      icon: ViewDayIcon
    },
    // {
    //   label: t("Calendar.Schedule"),
    //   value: 'listWeek',
    //   icon: ViewAgendaIcon
    // }
  ];

  useEffect(()=>{
    if(events){
      let prev = _.filter(events, comment => moment(comment.postDate).isBefore(moment(new Date()).startOf('day'))).length;
      let today = _.filter(events, comment => moment(comment.postDate).format('DD MMMM YYYY') === moment(new Date()).format('DD MMMM YYYY') ).length;
      let next = _.filter(events, comment => moment(comment.postDate).isAfter(moment(new Date()).endOf('day'))).length;

      setTotals({
        prev,
        today,
        next
      })
    }
  },[events])

  return (
    <Grid
      className={clsx(classes.root, className)}
      alignItems="center"
      container
      justifyContent="space-between"
      spacing={2}
      {...rest}
    >
      <Grid item>
        <ButtonGroup size="small">
          <Button style={{minWidth: 100}} onClick={onDatePrev}>{'ANT'}<br/>({loading ? 0 : totals.prev})</Button>
          <Button style={{minWidth: 100}} onClick={onDateToday}>{'HOY'}<br/>({loading ? 0 : totals.today})</Button>
          <Button style={{minWidth: 100}} onClick={onDateNext}>{'SIG'}<br/>({loading ? 0 : totals.next})</Button>
        </ButtonGroup>
      </Grid>
      <Hidden smDown>
        <Grid item>
          <Typography
            variant="h3"
            color="textPrimary"
          >
            {moment(date).format('MMMM YYYY')}
          </Typography>
        </Grid>
        <Grid item>
          {viewOptions.map((viewOption) => {
            const Icon = viewOption.icon;

            return (
              <Tooltip
                key={viewOption.value}
                title={viewOption.label}
              >
                <IconButton
                  color={viewOption.value === view ? 'secondary' : 'default'}
                  onClick={() => onViewChange(viewOption.value)}
                >
                  <Icon />
                </IconButton>
              </Tooltip>
            );
          })}
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={12} lg={12} md={12}>
        <Typography color='textPrimary' variant='h3'>
          Total{': '}{loading ? "- - -" : events.length}
        </Typography>
      </Grid>
    </Grid>
  );
};



export default Toolbar;
