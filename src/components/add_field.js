import styles from "./add_field.module.css";
import PlusButton from "./plus_button";

function AddField() {
    return (
    <div className={styles.addField}>
        <PlusButton />
    </div>
    );
}

export default AddField;