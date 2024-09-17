import Task from "./Task/Task";
import { useState } from "react";
import { initTasks } from "../data/InitTasks";
import { nanoid } from "nanoid";
import AddField from "./AddField/AddField";

function TaskList() {
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || initTasks);

    function handleTaskDone(updatedTaskId) {
        let updatedTaskList = taskList.map((task) => {
            if (updatedTaskId === task.id) {
                return { ...task, isDone: !task.isDone };
            } else {
                return task;
            }
        });
        setTaskList(updatedTaskList);
        localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    }

    function handleTaskDelete(taskToDeleteId) {
        let updatedTaskList = taskList.slice();
        updatedTaskList.splice(taskToDeleteId - 1, 1);
        for (let index = taskToDeleteId - 1; index < updatedTaskList.length; index++) {
            updatedTaskList[index].id -= 1;
        }
        setTaskList(updatedTaskList);
        localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    }

    function handleTaskChange(updatedTaskId, updatedTaskTitle) {
        let updatedTaskList = taskList.map((task) => {
            if (updatedTaskId === task.id) {
                return { ...task, title: updatedTaskTitle };
            } else {
                return task;
            }
        });
        setTaskList(updatedTaskList);
        localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    }

    function handleTaskAdd() {
        let updatedTaskList = taskList.slice();
        updatedTaskList.push({
            id: updatedTaskList.length + 1,
            isDone: false,
            title: `Task ${updatedTaskList.length + 1}`,
            isExpanded: false,
            description: `Task ${updatedTaskList.length + 1} description`,
        });
        setTaskList(updatedTaskList);
        localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    }

    function handleTaskExpand(taskToExpandId) {
        let updatedTaskList = taskList.map((task) => {
            if (taskToExpandId === task.id) {
                if (task.isExpanded === true) {
                    return {...task, isExpanded: false};
                } else {
                    return {...task, isExpanded: true};
                }
            } else {
                return {...task, isExpanded: false};
            }
        });
        setTaskList(updatedTaskList);
        localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    }

    function handleDescriptionChange(updatedTaskId, updatedDescriptionValue) {
        let updatedTaskList = taskList.map((task) => {
            if (updatedTaskId === task.id) {
                return {...task, description: updatedDescriptionValue};
            } else {
                return task;
            }
        });
        setTaskList(updatedTaskList);
        localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    }

    let currentTaskList = taskList.map((task) => {
        return (
            <Task
                key={nanoid()}
                id={task.id}
                isDone={task.isDone}
                title={task.title}
                isExpanded={task.isExpanded}
                description={task.description}
                onTaskDone={handleTaskDone}
                onTaskDelete={handleTaskDelete}
                onTaskBlur={handleTaskChange}
                onTaskExpand={handleTaskExpand}
                onDescriptionBlur={handleDescriptionChange}
            />
        );
    });
    return (
        <>
            {currentTaskList}
            <AddField onClick={handleTaskAdd} />
        </>
    );
}

export default TaskList;
