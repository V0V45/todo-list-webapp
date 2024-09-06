import logo from '../../images/logo.svg';
import classes from './Logo.module.css';

function Logo() {
    return (
        <img className={classes.logo} src={logo} alt='To-Do List' />
    );
}

export default Logo;