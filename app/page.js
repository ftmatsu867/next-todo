"use client"
import InputArea from "@/app/components/InputArea/InputArea";
import ListArea from "@/app/components/ListArea/ListArea";
import Title from "@/app/components/Title/Title";
import { useState } from "react";

export default function Home() {
  const [taskList,setTaskList]=useState([])
  return (
    <main>
       <Title/>
       <InputArea taskList={taskList} setTaskList={setTaskList}/>
       <ListArea taskList={taskList} setTaskList={setTaskList}/>
    </main>
  );
}
