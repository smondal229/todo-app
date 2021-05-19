import { makeStyles, Tooltip } from "@material-ui/core";

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black
  },
  tooltip: {
    backgroundColor: theme.palette.common.black
  }
}));

export default function CustomTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}
