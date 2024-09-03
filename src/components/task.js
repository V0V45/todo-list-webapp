import styles from "./task.module.css";
import DoneMarkerButton from "./done_marker_button";
import TaskInput from "./task_input";
import ExpandButton from "./expand_button";
import DeleteButton from "./delete_button";

function Task({isDone, title, isExpanded}) {
    // TODO: реализовать логику
    return (
        <>
        <div className={styles.taskContainer}>
            <DoneMarkerButton isDone={isDone} />
            <TaskInput title={title} />
            <ExpandButton isExpanded={isExpanded} />
            <DeleteButton />
        </div>
        </>
    );
}

export default Task;