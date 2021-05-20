import { AppBar, Box, CssBaseline, Drawer } from "@material-ui/core";
import TaskList from "../../Components/TaskList";
import useStyle from "./styles";

const Layout = () => {
  const classes = useStyle();

  return (
    <Box bgcolor='#f8f9fa'>
      <CssBaseline />
      <AppBar
        color='inherit'
        position='fixed'
        className={classes.appBar}
      ></AppBar>
      <Drawer
        classes={{
          paper: classes.drawerPaper
        }}
        variant='permanent'
        open
      ></Drawer>
      <Box>
        <TaskList />
      </Box>
    </Box>
  );
};

export default Layout;
