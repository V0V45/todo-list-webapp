import styles from "./task.module.css";
import DoneMarkerButton from "./done_marker_button";

function Task({isDone}) {
    return (
        <div className={styles.taskContainer}>
            {/* TODO: добавить нижеуказанные компоненты, а потом реализовать логику раскрытия */}
            <DoneMarkerButton isDone={isDone} />
            {/* <TaskInput title={title} />
            <ExpandButton isExpanded={isExpanded} /> */}
        </div>
    );
}

export default Task;