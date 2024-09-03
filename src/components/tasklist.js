import Task from "./task";
import { useState } from "react";
import { initTasks } from "./business_logic/init_tasks";

function TaskList() {
    const [taskList, setTaskList] = useState(initTasks);

    let currentTaskList = taskList.map((task) => {
        return (
            <Task isDone={task.isDone} title={task.title} isExpanded={task.isExpanded} />
        );
    });
    return currentTaskList;
}

export default TaskList;