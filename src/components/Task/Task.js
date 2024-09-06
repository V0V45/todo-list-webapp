import classes from "./Task.module.css";
import DoneMarkerButton from "../DoneMarkerButton/DoneMarkerButton";
import TaskInput from "../TaskInput/TaskInput";
import ExpandButton from "../ExpandButton/ExpandButton";
import DeleteButton from "../DeleteButton/DeleteButton";

function Task({isDone, title, isExpanded}) {
    // TODO: реализовать логику
    return (
        <>
        <div className={classes.taskContainer}>
            <DoneMarkerButton isDone={isDone} />
            <TaskInput title={title} />
            <ExpandButton isExpanded={isExpanded} />
            <DeleteButton />
        </div>
        </>
    );
}

export default Task;