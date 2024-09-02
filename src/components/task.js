import styles from "./task.module.css";
import DoneMarkerButton from "./done_marker_button";
import TaskInput from "./task_input";
import ExpandButton from "./expand_button";
import DeleteButton from "./delete_button";

function Task({isDone, title}) {
    // TODO: реализовать логику, добавить горизонтальную линию
    return (
        <>
        <div className={styles.taskContainer}>
            <DoneMarkerButton isDone={isDone} />
            <TaskInput title={title} />
            <ExpandButton isExpanded={false} />
            <DeleteButton />
        </div>
        </>
    );
}

export default Task;