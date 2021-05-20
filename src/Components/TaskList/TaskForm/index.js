import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ScheduleIcon from "@material-ui/icons/Schedule";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, deleteTask, updateTask } from "../../../actions/tasks";
import { assignees } from "../../../constants/assignees";
import { getTimeStops } from "../../../helpers/common";
import CustomTooltip from "../../common/CustomTooltip";

const TaskForm = ({
  classes,
  activeTask: {
    id: taskId,
    task_msg,
    task_date,
    task_time,
    time_zone,
    user_id,
    assigned_user
  },
  setActiveTask
}) => {
  const [title, setTitle] = useState(task_msg || "");
  const [date, setDate] = useState(task_date || new Date());
  const [time, setTime] = useState(
    moment.utc(task_time * 1000).format("h:mm a") || moment().format("h:mm a")
  );
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openTimeSelect, setOpenTimeSelect] = useState(false);
  const dispatch = useDispatch();
  const user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : {};
  const [assignee, setAssignee] = useState(assigned_user || "");

  const handleChange = (event) => {
    setAssignee(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    if (taskId) {
      dispatch(
        updateTask({
          id: taskId,
          is_completed: 0,
          task_msg: title,
          task_date: moment(date).format("YYYY-MM-DD"),
          task_time: moment(time, "h:mm a").diff(
            moment().startOf("day"),
            "seconds"
          ),
          time_zone: time_zone,
          assigned_user: assignee
        })
      ).then((ack) => {
        setLoading(false);
        if (ack) {
          setActiveTask(null);
          alert("Update successful");
        }
      });
    } else {
      dispatch(
        addTask({
          assigned_user: user.id,
          task_date: moment(date).format("YYYY-MM-DD"),
          task_time: moment(time, "h:mm a").diff(
            moment().startOf("day"),
            "seconds"
          ),
          is_completed: 0,
          time_zone: new Date().getTimezoneOffset(),
          task_msg: title
        })
      ).then((ack) => {
        setLoading(false);
        if (ack) {
          setActiveTask(null);
          alert("Successfully created");
        }
      });
    }
  };

  const onDeleteTask = () => {
    if (window.confirm("Are you sure you want to delete the task")) {
      dispatch(deleteTask({ id: taskId })).then((ack) => {
        alert(ack ? "Deleted successfully" : "Cannot delete the task");
      });
    }
  };

  return (
    <form onSubmit={onSave}>
      <Box bgcolor='#ECF6FC' p={2} mt={-1}>
        <Box>Task Description</Box>
        <TextField
          required
          variant='outlined'
          margin='dense'
          placeholder='Task title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
          className={classes.inputs}
        />

        <Box display='flex' mt={2}>
          <Box flexGrow={1} width='100%' mr={1}>
            <Box>Date</Box>
            <TextField
              required
              fullWidth
              variant='outlined'
              margin='dense'
              type='date'
              placeholder='Task title'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <DateRangeIcon />
                  </InputAdornment>
                )
              }}
              className={classes.inputs}
              disabled={loading}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Box>

          <Box flexGrow={1} width='100%' ml={1}>
            <Box mb={1}>Time</Box>
            <FormControl fullWidth>
              <Select
                required
                variant='outlined'
                margin='dense'
                placeholder='Time'
                id='select-time'
                open={openTimeSelect}
                onClose={() => setOpenTimeSelect(false)}
                onOpen={() => setOpenTimeSelect(true)}
                value={time}
                onChange={(e) => setTime(e.target.value)}
                disabled={loading}
                startAdornment={
                  <InputAdornment position='start'>
                    <ScheduleIcon />
                  </InputAdornment>
                }
                className={classes.inputs}
              >
                {getTimeStops("00:00", "23:59").map((slot) => (
                  <MenuItem key={slot} value={slot}>
                    {slot}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box mt={2}>
          <Box mb={1}>Assign User</Box>
          <FormControl fullWidth>
            <Select
              required
              variant='outlined'
              margin='dense'
              placeholder='Assign User'
              id='select-assignee'
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={assignee}
              onChange={handleChange}
              disabled={loading}
              className={classes.inputs}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {assignees.map((assignee) => (
                <MenuItem key={assignee.user_id} value={assignee.user_id}>
                  {assignee.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box display='flex' mt={2}>
          <Box flexGrow={1}>
            <CustomTooltip title='Delete task'>
              <IconButton
                size='small'
                disabled={loading}
                onClick={onDeleteTask}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </IconButton>
            </CustomTooltip>
          </Box>
          <Button
            variant='text'
            className={classes.formCancelBtn}
            onClick={() => setActiveTask(null)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            type='submit'
            disabled={loading}
            className={classes.formSaveButton}
          >
            Save
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default TaskForm;
