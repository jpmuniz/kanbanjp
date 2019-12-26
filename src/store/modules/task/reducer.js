export default function task(state = [], action) {
  switch (action.type) {
    case "ADD_TASK_SUCCESS":
      return [...state, action.task];
    case "GET_ALL_TASKS_SUCCESS":
      return [...state, action.tasks.response];
    default:
      return state;
  }
}
