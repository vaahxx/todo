import { useState } from "react";
import plusIcon from "../../assets/plus.svg";
import clipboard from "../../assets/clipboard.svg";
import styles from "./TasksBoard.module.css";

export function TasksBoard() {
  const [tasks, setTasks] = useState<
    { id: string; name: string; isComplete: boolean }[]
  >([]);
  const [createdTasksCounter, setCreatedTasksCounter] = useState(0);
  const [concludedTasksCounter, setConcludedTasksCounter] = useState(0);

  const EmptyBoard = () => (
    <div className={styles.emptyBoard}>
      <img src={clipboard} alt="clipboard-icon"></img>
      <strong>You don't have any task yet</strong>
      <p>Create tasks and organize your to-dos</p>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <textarea placeholder="Add new task" />
        <button type="submit">
          Create
          <img src={plusIcon} alt="plus-icon"></img>
        </button>
      </form>
      <div className={styles.progress}>
        <div>
          <span>Created Tasks</span>
          <strong>{createdTasksCounter}</strong>
        </div>
        <div>
          <span>Concluded</span>
          <strong>{concludedTasksCounter}</strong>
        </div>
      </div>
      {!tasks.length ? (
        <EmptyBoard />
      ) : (
        <div className={styles.tasksBoard}></div>
      )}
    </div>
  );
}
