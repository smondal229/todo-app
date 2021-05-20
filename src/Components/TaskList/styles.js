import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    border: "1px solid #ccc",
    borderRadius: 4,
    backgroundColor: "#f8f8f8",
    textTransform: "uppercase",
    alignItems: "center"
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
    fontWeight: 700,
    maxWidth: 100
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
  },
  cardContainer: {
    maxWidth: 400,
    marginTop: 200,
    marginLeft: 260,
    marginBottom: 40
  },
  inputs: {
    backgroundColor: "#f8f8f8"
  }
}));
