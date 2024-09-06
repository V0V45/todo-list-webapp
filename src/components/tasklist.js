import Task from "./Task/Task";
import { useState } from "react";
import { initTasks } from "../data/InitTasks";
import { nanoid } from "nanoid";

function TaskList() {
    const [taskList, setTaskList] = useState(initTasks);

    function handleTaskDone(updatedTaskId) {
        let updatedTaskList = taskList.map((task) => {
            if (updatedTaskId === task.id) {
                return { ...task, isDone: !task.isDone };
            } else {
                return task;
            }
        });
        setTaskList(updatedTaskList);
    }

    function handleTaskDelete(taskToDeleteId) {
        let updatedTaskList = taskList.slice();
        updatedTaskList.splice(taskToDeleteId - 1, 1);
        for (let index = taskToDeleteId - 1; index < updatedTaskList.length; index++) {
            updatedTaskList[index].id -= 1;
        }
        console.log(updatedTaskList);
        setTaskList(updatedTaskList);
    }

    let currentTaskList = taskList.map((task) => {
        return (
            <Task
                key={nanoid()}
                id={task.id}
                isDone={task.isDone}
                title={task.title}
                isExpanded={task.isExpanded}
                onTaskDone={handleTaskDone}
                onTaskDelete={handleTaskDelete}
            />
        );
    });
    return currentTaskList;
}

export default TaskList;
