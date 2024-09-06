import classes from "./TaskInput.module.css";

function TaskInput({title}) {
    return (
        <input className={classes.taskInput} placeholder="Введите задачу..." />
    );
}

export default TaskInput;