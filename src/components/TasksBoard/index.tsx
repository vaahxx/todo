import plusIcon from "../../assets/plus.svg";
import styles from "./TasksBoard.module.css";

export function TasksBoard() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <textarea placeholder="Add new task" />
        <button type="submit">
          Create
          <img src={plusIcon} alt="plus-icon"></img>
        </button>
      </form>
    </div>
  );
}
