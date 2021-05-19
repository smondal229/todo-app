import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    border: "1px solid #ccc",
    borderRadius: 4,
    backgroundColor: "#f6f6f6",
    textTransform: "uppercase"
  },
  taskButton: {
    padding: 10
  },
  editButton: {
    marginRight: 30,
    padding: "10px"
  },
  secondaryText: {
    color: red[500]
  },
  primaryText: {
    fontWeight: 700
  },
  formCancelBtn: {
    textTransform: "capitalize"
  },
  formSaveButton: {
    textTransform: "capitalize",
    backgroundColor: "#3DAB7E",
    color: "#fff",
    marginLeft: 15
  },
  trash: {
    justifyContent: "flex-start",
    flex: 1,
    "& > *": {
      width: "fit-content"
    }
  }
}));
