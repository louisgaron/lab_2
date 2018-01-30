var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("Element " + task + " added to Array");
    var count = tasks.length;
    return count;
}
function listAllTask() {
    tasks.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var key = task;
    var index = tasks.indexOf(key, 0);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    return tasks.length;
}
addTask("test");
var x = addTask("Hello");
console.log("Count After add" + x);
listAllTask();
var y = deleteTask("test");
console.log("Count After add" + y);
