import styles from "./main.module.css";
import TaskList from "./tasklist";
import AddField from "./add_field";

function Main() {

    return (
        <main className={styles.main}>
            {/* TODO: добавить логику добавления, удаления и раскрытия тасков */}
            <TaskList />
            <AddField />
        </main>
    );
}

export default Main;