import classes from "./Task.module.css";
import DoneMarkerButton from "../DoneMarkerButton/DoneMarkerButton";
import TaskInput from "../TaskInput/TaskInput";
import ExpandButton from "../ExpandButton/ExpandButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import ExpandField from "../ExpandField/ExpandField";

function Task({id, isDone, title, isExpanded, description, onTaskDone, onTaskDelete, onTaskBlur, onTaskExpand, onDescriptionBlur}) {
    return (
        <div className={classes.taskContainer}>
            <div className={classes.task}>
                <DoneMarkerButton isDone={isDone} onClick={() => onTaskDone(id)} />
                <TaskInput title={title} isDone={isDone} onTaskBlur={(value) => onTaskBlur(id, value)} />
                <ExpandButton isExpanded={isExpanded} onClick={() => onTaskExpand(id)} />
                <DeleteButton onClick={() => onTaskDelete(id)} />
            </div>
            <ExpandField 
                isShown={isExpanded}
                description={description}
                onDescriptionBlur={(value) => onDescriptionBlur(id, value)}
                isDone={isDone}
            />
        </div>
    );
}

export default Task;