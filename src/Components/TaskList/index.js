import { Box, Card, Divider, IconButton, List } from "@material-ui/core";
import { AddOutlined } from "@material-ui/icons";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../actions/tasks";
import { getAllUsers } from "../../actions/users";
import CustomTooltip from "../common/CustomTooltip";
import { useStyles } from "./styles";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);
  const [activeTask, setActiveTask] = useState(null);

  useEffect(() => {
    dispatch(getAllTasks());
    dispatch(getAllUsers());
  }, [dispatch]);

  const onClicktask = (task) => {
    setActiveTask(task);
  };
  console.log("tasks", tasks);
  return (
    <Card className={classes.cardContainer}>
      <Box className={classes.header}>
        <Box flexGrow={1} m={1} display='flex'>
          <Box>Tasks</Box>
          <Box ml={1}>{tasks?.length || 0}</Box>
        </Box>
        <Divider orientation='vertical' flexItem />

        <CustomTooltip title='New task'>
          <IconButton
            size='small'
            style={{ margin: "0px 5px" }}
            onClick={() => setActiveTask({})}
          >
            <AddOutlined />
          </IconButton>
        </CustomTooltip>
      </Box>
      <List>
        {activeTask !== null && !activeTask.id && (
          <TaskForm
            classes={classes}
            activeTask={activeTask}
            setActiveTask={setActiveTask}
          />
        )}
        {tasks?.map((task) =>
          task.id !== activeTask?.id ? (
            <Fragment key={task.id}>
              <Task classes={classes} task={task} onTaskClick={onClicktask} />
              <Divider />
            </Fragment>
          ) : (
            <TaskForm
              classes={classes}
              activeTask={activeTask}
              setActiveTask={setActiveTask}
            />
          )
        )}
      </List>
    </Card>
  );
};

export default TaskList;
