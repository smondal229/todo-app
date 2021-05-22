import { combineReducers } from "redux";
import tasks from "./tasks";
import users from "./user";

const reducers = combineReducers({
  tasks,
  users
});

export default reducers;
