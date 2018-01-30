let tasks: Array<string> = [];

function addTask(task:string) : number
{
    tasks.push(task);

    console.log("Element " + task + " added to Array")

    let count:number = tasks.length;
    return count;
}

function listAllTask()
{
    tasks.forEach(function(task)
    {
        console.log(task)
    });
}

function deleteTask(task:string) : number
{
    let key: string = task;
    let index : number = tasks.indexOf(key,0);
    
    if (index > -1)
    {
        tasks.splice(index,1);
    }
return tasks.length;
}

addTask("test");
let x : number =  addTask("Hello");
console.log("Count After add" + x);
listAllTask();
let y : number =  deleteTask("test");
console.log("Count After add" + y);