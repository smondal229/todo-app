import {
  Avatar,
  Button,
  ButtonGroup,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import NotificationsPausedIcon from "@material-ui/icons/NotificationsPaused";
import CustomTooltip from "../../common/CustomTooltip";

const Task = ({ classes, task, onTaskClick }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          src={task.user_icon}
          variant='square'
          style={{ borderRadius: 4 }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={task.task_msg}
        secondary={task.task_date}
        classes={{
          primary: classes.primaryText,
          secondary: classes.secondaryText
        }}
      />
      <ListItemSecondaryAction>
        <ButtonGroup>
          <CustomTooltip title='Edit task'>
            <Button
              className={classes.editButton}
              onClick={() => onTaskClick(task)}
            >
              <EditIcon />
            </Button>
          </CustomTooltip>
        </ButtonGroup>
        <ButtonGroup>
          <CustomTooltip title='Snooze this task to appear in your inbox later date'>
            <Button className={classes.taskButton}>
              <NotificationsPausedIcon />
            </Button>
          </CustomTooltip>

          <CustomTooltip title='Mark as done'>
            <Button className={classes.taskButton}>
              <CheckIcon />
            </Button>
          </CustomTooltip>
        </ButtonGroup>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Task;
