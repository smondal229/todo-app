import { createAction } from "redux-actions";
import * as AuthActions from "../api/tasks";
import {
  ADD_TODO_FAILED,
  ADD_TODO_SUCCESS,
  DELETE_TODO_FAILED,
  DELETE_TODO_SUCCESS,
  GET_ALL_TASK_FAILED,
  GET_ALL_TASK_SUCCESS,
  UPDATE_TODO_FAILED,
  UPDATE_TODO_SUCCESS
} from "../constants/actionTypes";

const getAllTasksSuccess = createAction(GET_ALL_TASK_SUCCESS);
const getAllTasksFailed = createAction(GET_ALL_TASK_FAILED);

export const getAllTasks = () => {
  return (dispatch) =>
    AuthActions.getAllTasks()
      .then((data) => dispatch(getAllTasksSuccess(data)))
      .catch((error) => dispatch(getAllTasksFailed(error)));
};

const addTaskSuccess = createAction(ADD_TODO_SUCCESS);
const addTaskFailure = createAction(ADD_TODO_FAILED);

export const addTask = (params) => {
  return (dispatch) =>
    AuthActions.addTask(params)
      .then((data) => {
        dispatch(addTaskSuccess(data));
        return true;
      })
      .catch((error) => {
        dispatch(addTaskFailure(error));
        return false;
      });
};

const updateTaskSuccess = createAction(UPDATE_TODO_SUCCESS);
const updateTaskFailure = createAction(UPDATE_TODO_FAILED);

export const updateTask = (params) => {
  return (dispatch) =>
    AuthActions.updateTask(params)
      .then((data) => {
        dispatch(updateTaskSuccess(data));
        return true;
      })
      .catch((error) => {
        dispatch(updateTaskFailure(error));
        return false;
      });
};

const deleteTaskSuccess = createAction(DELETE_TODO_SUCCESS);
const deleteTaskFailure = createAction(DELETE_TODO_FAILED);

export const deleteTask = (params) => {
  return (dispatch) =>
    AuthActions.deleteTask(params)
      .then((data) => {
        dispatch(deleteTaskSuccess({ ...data, id: params.id }));
        return true;
      })
      .catch((error) => {
        dispatch(deleteTaskFailure(error));
        return false;
      });
};
