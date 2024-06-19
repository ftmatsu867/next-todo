import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import styles from "app/components/InputArea/InputArea.module.scss"

const InputArea = ({taskList,setTaskList}) => {
    const [input,setInput]=useState("")
    const doChange=(e)=>{
        setInput(e.target.value)
    }
    const doClick=()=>{
        const task={
            id:uuidv4(),
            text:input
        }
        setTaskList(prev=>[...prev,task])
        setInput("")
    }
  return (
    <div className={styles.inputWrap}>
        <input autoFocus type="text" value={input} className={styles.inputArea} onChange={doChange} />
        <AddIcon className={styles.addIcon} onClick={doClick} />
    </div>
  )
}

export default InputArea