import classes from "./DoneMarkerButton.module.css";
import done from "../../images/done.svg";
import undone from "../../images/undone.svg";
import undoneHover from "../../images/undone-hover.svg";


function DoneMarkerButton({isDone}) {
    // TODO: добавить онклик событие
    function handleMouseOver(event) {
        event.target.src = undoneHover;
    }

    function handleMouseOut(event) {
        event.target.src = (isDone ? done : undone);
    }

    return (
        <button className={classes.doneMarkerButton} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            <img src={isDone ? done : undone} alt={isDone ? "Done" : "Not done"} />
        </button>
    );
}

export default DoneMarkerButton;