import classes from "./AddField.module.css";
import PlusButton from "../PlusButton/PlusButton";

function AddField({onClick}) {
    return (
    <div className={classes.addField}>
        <PlusButton onClick={() => onClick()} />
    </div>
    );
}

export default AddField;