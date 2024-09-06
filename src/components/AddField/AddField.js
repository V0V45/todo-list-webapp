import classes from "./AddField.module.css";
import PlusButton from "../PlusButton/PlusButton";

function AddField() {
    return (
    <div className={classes.addField}>
        <PlusButton />
    </div>
    );
}

export default AddField;