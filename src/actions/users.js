import { createAction } from "redux-actions";
import { getAllAssignees } from "../api/users";
import { GET_ALL_ASSIGNEES_SUCCESS } from "../constants/actionTypes";

const getAllAssigneesSuccess = createAction(GET_ALL_ASSIGNEES_SUCCESS);
export function getAllUsers() {
  return (dispatch) =>
    getAllAssignees()
      .then((data) => dispatch(getAllAssigneesSuccess(data)))
      .catch((error) => {
        console.log("error", error);
      });
}
