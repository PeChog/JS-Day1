let tasks = [];
let tasksInProgress = [];
let tasksDone = [];
// let ask = prompt("Ajouter une tâche");
// do {
//   ask;
// } while (tasks);

const addTask = (task) => {
  tasks = [...tasks, task];
};

addTask();

console.log(tasks);
