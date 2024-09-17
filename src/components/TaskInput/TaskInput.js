import classes from "./TaskInput.module.css";
import { useState } from "react";

function TaskInput({title, onBlur}) {
    const [inputValue, setInputValue] = useState(title);

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleBlur(event) {
        onBlur(event.target.value);
    }

    return (
        <input className={classes.taskInput} placeholder="Введите задачу..." value={inputValue} onChange={handleChange} onBlur={handleBlur} />
    );
}

export default TaskInput;