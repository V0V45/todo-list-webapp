import classes from "./DeleteButton.module.css";
import deleteIcon from "../../images/delete.svg";
import deleteHover from "../../images/delete-hover.svg";

function DeleteButton({onClick}) {
    function handleMouseOver(event) {
        event.target.src = deleteHover;
    }

    function handleMouseOut(event) {
        event.target.src = deleteIcon;
    }

    return (
        <button className={classes.deleteButton} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={onClick}>
            <img src={deleteIcon} alt="Delete?" />
        </button>
    );
}

export default DeleteButton;