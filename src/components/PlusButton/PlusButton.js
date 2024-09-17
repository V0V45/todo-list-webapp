import classes from "./PlusButton.module.css";
import plusIcon from "../../images/plus.svg";
import plusHover from "../../images/plus-hover.svg";

function PlusButton({onClick}) {
    function handleMouseOver(event) {
        event.target.src = plusHover;
    }

    function handleMouseOut(event) {
        event.target.src = plusIcon;
    }

    return (
        <button className={classes.plusButton} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={onClick} >
            <img src={plusIcon} alt="Add" />
        </button>
    );
}

export default PlusButton;