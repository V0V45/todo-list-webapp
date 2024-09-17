import classes from "./ExpandButton.module.css";
import expandClosed from "../../images/expand-closed.svg";
import expandOpened from "../../images/expand-opened.svg";
import expandOpenedHover from "../../images/expand-hover.svg";
import expandClosedHover from "../../images/expand-closed-hover.svg";

function ExpandButton({isExpanded, onClick}) {
    function handleMouseOver(event) {
        event.target.src = (isExpanded ? expandClosedHover : expandOpenedHover);
    }

    function handleMouseOut(event) {
        event.target.src = (isExpanded ? expandOpened : expandClosed);
    }

    return (
        <button className={classes.expandButton} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={onClick}>
            <img src={isExpanded ? expandOpened : expandClosed} alt={isExpanded ? "expanded" : "hidden"} />
        </button>
    );
}

export default ExpandButton;