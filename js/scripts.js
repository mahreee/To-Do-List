var todo = todo || {},
  data = JSON.parse(localStorage.getItem("todoData"));
data = data || {};
(function (todo, data, $) {
  var defaults = {
    todoTask: "todo-task",
    todoHeader: "task-header",
    todoDate: "task-date",
    todoDescription: "task-description",
    taskId: "task-",
    formId: "todo-form",
    dataAttribute: "data",
    deleteDiv: "delete-div"
  }, codes = {
    "1": "#pending",
    "2": "#inProgress",
    "3": "#completed"
  };
  

