import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import plusIcon from "../../assets/plus.svg";
import clipboard from "../../assets/clipboard.svg";
import styles from "./TasksBoard.module.css";

export function TasksBoard() {
  const [tasks, setTasks] = useState<
    { id: string; content: string; isComplete: boolean }[]
  >([]);
  const [createdTasksCounter, setCreatedTasksCounter] = useState(0);
  const [concludedTasksCounter, setConcludedTasksCounter] = useState(0);

  function handleCreateTask(ev: React.SyntheticEvent<HTMLFormElement>) {
    ev.preventDefault();
    const value = ev.currentTarget.content.value;
    console.log(ev.currentTarget);
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        content: value,
        isComplete: false,
      },
    ]);
    setCreatedTasksCounter((previous) => previous + 1);
  }

  function handleCheckboxChange(taskId: string) {
    const tasksCopy = [...tasks];
    const index = tasks.findIndex((task) => task.id === taskId);
    tasksCopy[index].isComplete = !tasks[index].isComplete;
    setTasks([...tasksCopy]);
  }

  const EmptyBoard = () => (
    <div className={styles.emptyBoard}>
      <img src={clipboard} alt="clipboard-icon"></img>
      <strong>You don't have any task yet</strong>
      <p>Create tasks and organize your to-dos</p>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleCreateTask}>
        <textarea placeholder="Add new task" name="content" />
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
        <div className={styles.tasksBoard}>
          {tasks.map((task) => (
            <div key={task.id}>
              <input
                type="checkbox"
                id={task.id}
                name={task.content}
                value={task.content}
                checked={task.isComplete}
                onChange={() => handleCheckboxChange(task.id)}
              />
              <p>{task.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
