import classes from "./SearchButton.module.css";
import searchIcon from "../../images/search.svg";
import searchIconHover from "../../images/search-hover.svg";
import searchIconActive from "../../images/search-active.svg";


function SearchButton({onClick, isActive}) {
    function handleMouseOver(event) {
        event.target.src = searchIconHover;
    }

    function handleMouseOut(event) {
        event.target.src = isActive ? searchIconActive : searchIcon;
    }

    return (
        <button className={classes.searchButton} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={onClick} >
            <img src={isActive ? searchIconActive : searchIcon} alt="Search" />
        </button>
    );
}

export default SearchButton;