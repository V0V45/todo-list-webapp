import { useState } from "react";
import classes from "./SearchField.module.css";

function SearchField({ isActive, onSearch }) {
    const [searchValue, setSearchValue] = useState("");

    function handleChange(event) {
        setSearchValue(event.target.value);
        onSearch(event.target.value);
    }

    const hidden = <></>;
    const searchFieldComponent = <input 
                                    className={classes.searchField}
                                    placeholder="Введите заголовок задачи..."
                                    value={searchValue}
                                    onChange={handleChange}
                                />;

    if (isActive) {
        return searchFieldComponent;
    } else {
        return hidden;
    }
}

export default SearchField;