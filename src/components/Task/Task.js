import classes from "./Task.module.css";
import DoneMarkerButton from "../DoneMarkerButton/DoneMarkerButton";
import TaskInput from "../TaskInput/TaskInput";
import ExpandButton from "../ExpandButton/ExpandButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import ExpandField from "../ExpandField/ExpandField";

function Task({id, isDone, title, isExpanded, description, onTaskDone, onTaskDelete, onBlur, onTaskExpand}) {
    return (
        <div className={classes.taskContainer}>
            <div className={classes.task}>
                <DoneMarkerButton isDone={isDone} onClick={() => onTaskDone(id)} />
                <TaskInput title={title} isDone={isDone} onBlur={(value) => onBlur(id, value)} />
                <ExpandButton isExpanded={isExpanded} onClick={() => onTaskExpand(id)} />
                <DeleteButton onClick={() => onTaskDelete(id)} />
            </div>
            <ExpandField isShown={isExpanded} description={description} />
        </div>
    );
}

export default Task;