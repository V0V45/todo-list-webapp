import Logo from "../Logo/Logo";
import classes from "./Header.module.css";

function Header() {
    return (
        <header className={classes.header}>
            <Logo />
        </header>
    );
}

export default Header;

