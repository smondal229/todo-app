import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      height: 60
    }
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#323E4D"
  }
}));

export default useStyle;
