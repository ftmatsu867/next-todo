import React from 'react'
import styles from "app/components/ListArea/ListArea.module.scss"
import Task from '@/app/components/Task/Task';

const ListArea = ({ taskList, setTaskList }) => {
  return (
    <ul className={styles.taskList}>
      {taskList.map((task) => {
        return (
          <Task key={task.id} task={task} taskList={taskList} setTaskList={setTaskList} />
        )
      })}
    </ul>
  )
}

export default ListArea