import styles from "./done_marker_button.module.css";
import done from "./images/done.svg";
import undone from "./images/undone.svg";
import undoneHover from "./images/undone-hover.svg";
import { useState } from "react";


function DoneMarkerButton() {
    // TODO: реализовать все функции через стейты
    function handleMouseOver(event) {
        event.target.firstElementChild.src = undoneHover;
    }

    function handleMouseOut(event) {
        event.target.firstElementChild.src = (isDone ? done : undone);
    }

    function handleMouseClick(event) {
        event.target.firstElementChild.src = (isDone ? done : undone);
    }

    function setMarkerImage(state) {

    }

    return (
        <button className={styles.doneMarkerButton} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onMouseClick={handleMouseClick} >
            <img className={styles.doneMarkerImage} src={tasks.isDone ? done : undone} alt={isDone ? "Done" : "Not done"} />
        </button>
    );
}

export default DoneMarkerButton;