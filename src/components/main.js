import styles from "./main.module.css";
import Task from "./task";

function Main() {
    return (
        <main className={styles.main}>
            {/* TODO: добавить логику добавления, удаления и раскрытия тасков */}
            <Task isDone={false} />
        </main>
    );
}

export default Main;