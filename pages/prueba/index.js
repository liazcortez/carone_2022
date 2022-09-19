import { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import {
    Container
} from '@mui/material'

const Calendar = () => {
  const calendarRef = useRef(null);
  return (
    <Container maxWidth="lg">
        <FullCalendar
            innerRef={calendarRef}
            plugins={[timeGridPlugin, interactionPlugin]}
            editable
            selectable
        />
    </Container>
  );
};

export default Calendar;