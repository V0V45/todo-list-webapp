import styles from "./task_input.module.css";

function TaskInput({title}) {
    return (
        <input className={styles.taskInput} placeholder="Введите задачу..." />
    );
}

export default TaskInput;