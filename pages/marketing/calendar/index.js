import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Paper} from "@mui/material";

import { makeStyles } from "@material-ui/core";

import FullCalendar from "@fullcalendar/react";
import { useTheme } from "@material-ui/styles";
import useCampaign from "./../../../hooks/useCampaign";
import useAuth from "./../../../hooks/useAuth";
import moment from "moment";
import { Capitalize, CapitalizeNames } from "./../../../utils/capitalize";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useRouter } from "next/dist/client/router";
import "moment/locale/es";
moment.locale("es");
// import listPlugin from '@fullcalendar/list';
// import timelinePlugin from '@fullcalendar/timeline';

import StoreRockstar from "./StoreRockstar";
// import Header from './Header';
import Toolbar from "./Toolbar";
const t = (t) => t;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  calendar: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    "& .fc-unthemed .fc-head": {
      backgroundColor: theme.palette.background.dark,
    },
    "& .fc-unthemed .fc-body": {
      backgroundColor: theme.palette.background.default,
    },
    "& .fc-unthemed .fc-row": {
      borderColor: theme.palette.divider,
    },
    "& .fc-unthemed .fc-axis": {
      ...theme.typography.body2,
    },
    "& .fc-unthemed .fc-divider": {
      backgroundColor: theme.palette.background.dark,
      borderColor: theme.palette.divider,
    },
    "& .fc-unthemed th": {
      borderColor: theme.palette.divider,
    },
    "& .fc-unthemed td": {
      borderColor: theme.palette.divider,
    },
    "& .fc-unthemed td.fc-today": {
      backgroundColor: theme.palette.background.dark,
    },
    "& .fc-unthemed .fc-highlight": {
      backgroundColor: theme.palette.background.dark,
    },
    "& .fc-unthemed .fc-event": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      borderWidth: 2,
      opacity: 0.9,
      "& .fc-time": {
        ...theme.typography.h6,
        color: "inherit",
      },
      "& .fc-title": {
        ...theme.typography.body1,
        color: "inherit",
      },
    },
    "& .fc-unthemed .fc-day-top": {
      ...theme.typography.body2,
    },
    "& .fc-unthemed .fc-day-header": {
      ...theme.typography.subtitle2,
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary,
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.dark,
    },
    "& .fc-unthemed .fc-list-view": {
      borderColor: theme.palette.divider,
    },
    "& .fc-unthemed .fc-list-empty": {
      ...theme.typography.subtitle1,
    },
    "& .fc-unthemed .fc-list-heading td": {
      backgroundColor: theme.palette.background.dark,
      borderColor: theme.palette.divider,
    },
    "& .fc-unthemed .fc-list-heading-main": {
      ...theme.typography.h6,
    },
    "& .fc-unthemed .fc-list-heading-alt": {
      ...theme.typography.h6,
    },
    "& .fc-unthemed .fc-list-item:hover td": {
      backgroundColor: theme.palette.background.dark,
    },
    "& .fc-unthemed .fc-list-item-title": {
      ...theme.typography.body1,
    },
    "& .fc-unthemed .fc-list-item-time": {
      ...theme.typography.body2,
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  const router = useRouter();

  const calendarRef = useRef(null);
  const theme = useTheme();
  const [date, setDate] = useState(moment().toDate());
  const [view, setView] = useState("dayGridMonth");
  //   const { enqueueSnackbar } = useSnackbar();
  const [events, setEvents] = useState([]);
  const { user } = useAuth();

  //   const {
  //     comments,
  //     updateComment,
  //     clearState
  //   } = useComment();
  const [currentComment, setCurrentComment] = useState();
  const [modalReload, setModalReload] = useState(false);
  const [value, setValue] = useState("");
  const [userParams, setUserParams] = useState(false);

  const [eventModal, setEventModal] = useState({
    open: false,
    event: null,
  });

  const defaultState = {
    page: 1,
    limit: 15,
    searching: false,
    sort: "createdAt,-1",
    //     designType: "organic",
    //     status:['modified','review'],
    //     postDate: { gte: moment().subtract("30", "days") },
  };

  const [params, setParams] = useState(defaultState);

  const { getCampaigns: getData, campaigns: data, count } = useCampaign();

  useEffect(() => {
    if (!user || !user.role || !user._id) return;
    if (["rockstar"].includes(user.role)) return setUserParams({});
    if (["designer", "marketing digital"].includes(user.role))
      return setUserParams({
        ["store__id"]: { value: user.stores.map((store) => store._id._id) },
      });
    if (["admin marketing digital"].includes(user.role))
      return setUserParams({
        ["store_make__id"]: { value: user.makes.map((make) => make._id) },
      });
    // default params
    setUserParams({ ["user__id"]: { value: user._id } });

    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    if (!userParams) return;
    setParams({ ...params, ...userParams, searching: true });
    // eslint-disable-next-line
  }, [userParams]);

  useEffect(() => {
    console.log(params);
    if (params && !params.searching) return;
    if (getData) {
      let newParams = {};
      // formatparams
      Object.entries(params).forEach((row) => {
        let [name, input] = row;
        if (userParams?.[name] && input === "")
          return (newParams[name] =
            userParams[name]?.value || userParams[name]);
        if (input === "") return;
        newParams[input?.searchName || name] =
          typeof input.value !== "undefined" ? input.value : input;
      });
      console.log(newParams);
      getData(newParams);
      setParams({ ...params, searching: false });
    }
  }, [params]);

  useEffect(() => {
    if (data) {
      let aux = data.map((item) => {
        let color = "";
        if (
          moment(item.endDate).format("YYYY-MM-DD") >
          moment().format("YYYY-MM-DD")
        ) {
          color = "#388e3c";
        } else if (
          moment(item.endDate).format("YYYY-MM-DD") <
          moment().format("YYYY-MM-DD")
        ) {
          color = "#d32f2f";
        } else {
          color = "#f9a825";
        }

        return {
          ...item,
          color,
          title: `${item.title} - Termina: el ${moment(item.endDate).format(
            "DD"
          )} de ${moment(item.endDate).format("MMMM")}`,
          start: item.startDate,
          end: item.endtDate,
          //     title: `${item.lead && item.lead.name ?CapitalizeNames(item.lead.name) : ''} - ${item.substatus && item.substatus.name ? t(`Substatus.${item.substatus.name}`) : ''} - ${item.comment ? Capitalize(item.comment.substring(0, 120)) : ''}${item.comment && item.comment.length > 120 ? '...' : ''}`
        };
      });
      setEvents(aux);
    }
    //eslint-disable-next-line
  }, [data]);

  const handleEventOpen = (event) => {
    if (!event?.event?._def?.extendedProps?._id) return;
//     setEventModal({
//       open: true,
//       event: null,
//     });
        router.push(
          `/marketing/campaigns/${event?.event?._def?.extendedProps?._id}`
        );
  };

  const handleRangeSelect = (arg) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.unselect();
    }
  };

  const handleEventResize = async ({ event }) => {
    try {
    } catch (err) {
      console.error(err);
    }
  };

  const handleEventDrop = async ({ event }) => {};

  const handleDateToday = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };

  const handleViewChange = (newView) => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.changeView(newView);
      setView(newView);
    }
  };

  const handleDatePrev = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleDateNext = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  const handleModalClose = () => {
    setEventModal({
      open: false,
      event: null,
    });
  };

  return (
    <Container maxWidth="xl">
      <Box sx={classes.root}>
        <Container maxWidth={false}>
          {/* <Header /> */}
          <StoreRockstar
            {...{ setParams, params }}
            style={{ marginBottom: "1em" }}
          />
          <Toolbar
            date={date}
            onDateNext={handleDateNext}
            onDatePrev={handleDatePrev}
            onDateToday={handleDateToday}
            onViewChange={handleViewChange}
            events={events}
            view={view}
          />
          <Box mt={3}>
            <Box
              className={classes.calendar}
              sx={{
                width: "100%",
                marginTop: "1rem",
                boxShadow: "rgb(140 152 164 / 25%) 0px 3px 6px 0px",
                borderRadius: "4px",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
                borderBottomLeftRadius: "4px",
              }}
            >
              <FullCalendar
                allDayMaintainDuration
                defaultDate={date}
                defaultView={view}
                droppable
                editable
                eventLimit
                eventResizableFromStart
                headerToolbar={false}
                height={800}
                rerenderDelay={10}
                selectable
                weekends
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  //   listPlugin,
                  //   timelinePlugin
                ]}
                events={events}
                ref={calendarRef}
                eventClick={handleEventOpen}
                eventDrop={handleEventDrop}
                eventResize={handleEventResize}
                select={handleRangeSelect}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;
