import styles from "./task.module.css";
import DoneMarkerButton from "./done_marker_button";
import TaskInput from "./task_input";
import ExpandButton from "./expand_button";

function Task({isDone, title}) {
    // TODO: добавить нижеуказанные компоненты, а потом реализовать логику раскрытия
    /* <ExpandButton isExpanded={isExpanded} /> */

    return (
        <div className={styles.taskContainer}>
            <DoneMarkerButton isDone={isDone} />
            <TaskInput title={title} />
            <ExpandButton isExpanded={false} />
        </div>
    );
}

export default Task;