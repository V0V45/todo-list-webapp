import Task from "./Task/Task";
import { useState } from "react";
import { initTasks } from "../data/InitTasks";
import { nanoid } from "nanoid";

function TaskList() {
    const [taskList, setTaskList] = useState(initTasks);

    let currentTaskList = taskList.map((task) => {
        return (
            <Task key={nanoid()} isDone={task.isDone} title={task.title} isExpanded={task.isExpanded} />
        );
    });
    return currentTaskList;
}

export default TaskList;