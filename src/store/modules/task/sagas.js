import { call, put, all, takeLatest } from "redux-saga/effects";
import { addTaskSuccess, getAllTasksSuccess } from "./actions";

import api from "../../../services/index";

function* addTask(action) {
  const title = action.task.title;
  const description = action.task.description;

  const response = yield call(api.post, `/createtodo`, {
    title: title,
    description: description
  });
  yield put(addTaskSuccess(response.data));
}

function* getAllTasks() {
  const response = yield call(api.get, "/gettasks");
  console.log(response.data);
  yield put(getAllTasksSuccess(response.data));
}

export default all([
  takeLatest("ADD_TASK_REQUEST", addTask),
  takeLatest("GET_ALL_TASKS", getAllTasks)
]);
