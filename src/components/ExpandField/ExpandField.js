import { useState } from "react";
import classes from "./ExpandField.module.css";

function ExpandField({isShown, description}) {
    const [descriptionValue, setDescriptionValue] = useState(description);

    function handleChange(event) {
        setDescriptionValue(event.target.value);
    }

    const hidden = <></>;
    const shown = <textarea
        className={classes.descriptionTextArea}
        onChange={handleChange}
        value={descriptionValue}
        />;

    if (isShown) {
        return shown;
    } else {
        return hidden;
    }
}

export default ExpandField;