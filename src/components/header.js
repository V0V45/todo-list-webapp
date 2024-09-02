import Logo from "./logo";
import styles from "./header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <Logo />
        </header>
    );
}

export default Header;

