import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import styles from "app/components/Task/Task.module.scss"


const Task = ({ task,taskList,setTaskList }) => {
    const [isDone,setIsDone]=useState(false)
    const handleCheck=()=>{
        setIsDone(prev=>!prev)
    }
    const handleDelete=()=>{
       const newTask=taskList.filter((item)=>{
        return item.id!==task.id
       })
       setTaskList(newTask)
    }
    return (
        <li key={task.id} className={isDone?`${styles.taskWrapper} ${styles.done}`:styles.taskWrapper}>
            <span className={isDone?`${styles.taskName} ${styles.done}`:styles.taskName}>{task.text}</span>
            <CheckIcon className={styles.checkIcon} onClick={handleCheck} />
            <DeleteIcon className={styles.deleteIcon} onClick={isDone?handleDelete:null}/>
        </li>
    )
}

export default Task