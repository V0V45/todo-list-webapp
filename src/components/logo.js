import logo from './images/logo.svg';
import styles from './logo.module.css';

function Logo() {
    return (
        <img className={styles.logo} src={logo} alt='To-Do List' />
    );
}

export default Logo;