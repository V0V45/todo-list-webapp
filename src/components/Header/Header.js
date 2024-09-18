import { useState } from "react";
import Logo from "../Logo/Logo";
import SearchButton from "../SearchButton/SearchButton";
import classes from "./Header.module.css";
import SearchField from "../SearchField/SearchField";

function Header({onSearch}) {
    const [searchActive, setSearchActive] = useState(false);

    function handleActivateSearch() {
        const isActive = !searchActive;
        setSearchActive(isActive);
    }

    return (
        <header className={classes.header}>
            <Logo />
            <SearchField isActive={searchActive} onSearch={onSearch} />
            <SearchButton onClick={handleActivateSearch} isActive={searchActive} />
        </header>
    );
}

export default Header;

