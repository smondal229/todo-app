import { GET_ALL_ASSIGNEES_SUCCESS } from "../constants/actionTypes";

const INITIAL_STATE = {
  assigneeUsers: []
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_ASSIGNEES_SUCCESS:
      console.log("action", action);
      return {
        ...state,
        assigneeUsers: action.payload.results?.filter(
          (user) => user.user_status === "accepted"
        )
      };
    default:
      return state;
  }
}
