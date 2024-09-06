import classes from "./ExpandButton.module.css";
import expandClosed from "../../images/expand-closed.svg";
import expandOpened from "../../images/expand-opened.svg";
import expandHover from "../../images/expand-hover.svg";

function ExpandButton({isExpanded}) {
    function handleMouseOver(event) {
        event.target.src = expandHover;
    }

    function handleMouseOut(event) {
        event.target.src = (isExpanded ? expandOpened : expandClosed);
    }

    return (
        <button className={classes.expandButton} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img src={isExpanded ? expandOpened : expandClosed} alt={isExpanded ? "expanded" : "hidden"} />
        </button>
    );
}

export default ExpandButton;