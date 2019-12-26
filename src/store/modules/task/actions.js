export function addTask(task) {
  return {
    type: "ADD_TASK_REQUEST",
    task
  };
}

export function addTaskSuccess(task) {
  return {
    type: "ADD_TASK_SUCCESS",
    task
  };
}

export function getAllTasks() {
  return {
    type: "GET_ALL_TASKS"
  };
}

export function getAllTasksSuccess(tasks) {
  return {
    type: "GET_ALL_TASKS_SUCCESS",
    tasks
  };
}
