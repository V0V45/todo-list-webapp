import styles from "./delete_button.module.css";
import deleteIcon from "./images/delete.svg";
import deleteHover from "./images/delete-hover.svg";

function DeleteButton() {
    function handleMouseOver(event) {
        event.target.src = deleteHover;
    }

    function handleMouseOut(event) {
        event.target.src = deleteIcon;
    }

    return (
        <button className={styles.deleteButton} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img src={deleteIcon} alt="Delete?" />
        </button>
    );
}

export default DeleteButton;