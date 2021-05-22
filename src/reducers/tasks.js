import {
  ADD_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  GET_ALL_TASK_SUCCESS,
  UPDATE_TODO_SUCCESS
} from "../constants/actionTypes";

const INITIAL_STATE = {};

export default function tasks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_TASK_SUCCESS:
      return {
        ...state,
        list: action.payload.results
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        list: [action.payload.results, ...state.list]
      };

    case UPDATE_TODO_SUCCESS:
      const newList = state.list.map((task) =>
        task.id === action.payload.results.id ? action.payload.results : task
      );
      return {
        ...state,
        list: newList
      };

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        list: state.list.filter((task) => task.id !== action.payload.id)
      };
    default:
      return state;
  }
}
