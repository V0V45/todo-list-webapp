import classes from "./Main.module.css";
import TaskList from "../TaskList";

function Main() {
    return (
        <main className={classes.main}>
            <TaskList />
        </main>
    );
}

export default Main;