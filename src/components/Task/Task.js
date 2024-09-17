import classes from "./Task.module.css";
import DoneMarkerButton from "../DoneMarkerButton/DoneMarkerButton";
import TaskInput from "../TaskInput/TaskInput";
import ExpandButton from "../ExpandButton/ExpandButton";
import DeleteButton from "../DeleteButton/DeleteButton";

function Task({id, isDone, title, isExpanded, onTaskDone, onTaskDelete, onBlur}) {
    // TODO: реализовать логику
    return (
        <>
        <div className={classes.taskContainer}>
            <DoneMarkerButton isDone={isDone} onClick={() => onTaskDone(id)} />
            <TaskInput title={title} onBlur={(value) => onBlur(id, value)} />
            <ExpandButton isExpanded={isExpanded} />
            <DeleteButton onClick={() => onTaskDelete(id)} />
        </div>
        </>
    );
}

export default Task;