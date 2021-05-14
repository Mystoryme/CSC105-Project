import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import moment from "moment";
import axios from "../utils/axios";
import dayjs from "dayjs";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
} from "@material-ui/core";

const CalendarView = () => {
  const [event, setEvent] = React.useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [currentText, setCurrentText] = React.useState("");
  const [editDialog, setEditDialog] = React.useState(false);
  const [editDialogContent, setEditDialogContent] = React.useState(null);

  const fetchEvent = () => {
    axios.get("http://localhost:8080/todolist/list").then((response) => {
      if (response.data.success) {
        setEvent(response.data.list);
      } else {
        alert("Unable to fetch data.");
      }
    });
  };

  const handleClickOpen = (args) => {
    setOpenDialog(true);
    setCurrentDate(args.date);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setEditDialogContent(null);
  };

  const getDateFormat = (date) => {
    return `${date.getFullYear()}-${getTwoDigit(
      date.getMonth() + 1
    )}-${getTwoDigit(date.getDate())}`;
  };
  const getTwoDigit = (v) => {
    return v < 9 ? "0" + v : v;
  };
  const addEvent = () => {
    setOpenDialog(false);
    axios
      .post("http://localhost:8080/todolist/add", {
        text: currentText,
        date: currentDate.getTime() + 7 * 60 * 60 * 1000,
      })
      .then((response) => {
        if (response.data.success) {
          fetchEvent();
          alert("Plan added");
        } else {
          alert("Error");
        }
      });
  };

  const editEvent = () => {
    axios
      .post("http://localhost:8080/todolist/update/" + editDialogContent.id, {
        text: editDialogContent.title,
        date: editDialogContent.start.getTime() + 7 * 60 * 60 * 1000,
        done: editDialogContent.isfinish,
      })
      .then((response) => {
        if (response.data.success) {
          fetchEvent();
        } else {
          alert("Error");
        }
      });
    setEditDialogContent(null);
  };

  const deleteEvent = (id) => {
    axios
      .delete("http://localhost:8080/todolist/delete/" + id)
      .then((response) => {
        if (response.data.success) {
          fetchEvent();
          alert("Plan deleted");
        } else {
          alert("Error");
        }
      });
  };

  const handleEventClick = (args) => {
    const data = {
      id: args.event.id,
      title: args.event.title,
      start: args.event.start,
      isfinish: args.event.extendedProps.isfinish,
    };
    setEditDialogContent(data);
    console.log(data);
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={event}
        displayEventTime={false}
        dateClick={handleClickOpen}
        eventClick={handleEventClick}
      />
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Create plan on {new moment(currentDate).format("LL")}
        </DialogTitle>
        <DialogContent style={{ width: "500px" }}>
          <DialogContentText>Insert your plansss ◡̈</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Plan detail"
            type="text"
            multiline
            rows="3"
            fullWidth
            onChange={(e) => setCurrentText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addEvent} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={editDialogContent != null}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Edit plan ID {editDialogContent?.id}
        </DialogTitle>
        <DialogContent style={{ width: "500px" }}>
          <DialogContentText>Edit your plan ◡̈</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Plan detail"
            placeholder="Plan detail"
            type="text"
            multiline
            rows="3"
            fullWidth
            value={editDialogContent?.title}
            onChange={(e) =>
              setEditDialogContent({
                ...editDialogContent,
                title: e.target.value,
              }) & console.log(editDialogContent)
            }
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="time"
                label="Plan Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={
                  editDialogContent != null
                    ? getDateFormat(editDialogContent?.start)
                    : ""
                }
                onChange={(e) => {
                  setEditDialogContent({
                    ...editDialogContent,
                    start: new Date(e.target.value),
                  });
                  console.log(editDialogContent);
                }}
              />
            </Grid>
            <Grid
              item
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={3}
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={editDialogContent?.isfinish}
                    onChange={(e) =>
                      setEditDialogContent({
                        ...editDialogContent,
                        isfinish: e.target.checked,
                      })
                    }
                  />
                }
                label="Done"
              />
            </Grid>
            <Grid
              item
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={3}
            >
              <Button
                variant="outlined"
                onClick={() => deleteEvent(editDialog.id)}
              >
                delete
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={editEvent} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CalendarView;
