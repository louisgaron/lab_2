import {function_interface} from "./functions_interface";

class myClass implements function_interface
{
tasks: Array<string> = [];

 addTask(task:string) : number
{
    this.tasks.push(task);

    console.log("Element " + task + " added to Array")

    let count:number = this.tasks.length;
    return count;
}

 listAllTasks()
{
    this.tasks.forEach(function(task)
    {
        console.log(task)
    });
}
 deleteTask(task:string) : number
{
    let key: string = task;
    let index : number = this.tasks.indexOf(key,0);
    
    if (index > -1)
    {
        this.tasks.splice(index,1);
    }
return this.tasks.length;
}
}
let newClass = new myClass();

newClass.addTask("Hello");
newClass.listAllTasks();
newClass.deleteTask("Hello");