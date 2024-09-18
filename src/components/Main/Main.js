import classes from "./Main.module.css";
import TaskList from "../TaskList";

function Main({searchValue}) {
    return (
        <main className={classes.main}>
            <TaskList searchValue={searchValue} />
        </main>
    );
}

export default Main;