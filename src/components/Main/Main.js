import classes from "./Main.module.css";
import TaskList from "../TaskList";
import AddField from "../AddField/AddField";

function Main() {

    return (
        <main className={classes.main}>
            {/* TODO: добавить логику добавления, удаления и раскрытия тасков */}
            <TaskList />
            <AddField />
        </main>
    );
}

export default Main;