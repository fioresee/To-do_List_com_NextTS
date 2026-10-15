'use client';

import { useState } from "react";
import { Task } from "./types";
import TaskItem from "./components/TaskItem";
import "./globals.css"

export default function HomePage(){
    const [tasks, setTasks] = useState<Task[]>([]);   //Utiliza a posição do tipo 'Task' no arquivo 'types.ts'
    const [text, setText] = useState('');

    function addTask() {
        const value = text.trim();
        if(!value) return;
        const newTask: Task = {
            id: crypto.randomUUID(),     // Cria um número aleatório, um id aleatório
            text: value,
            done: false,
        };
        setTasks((prev) => [newTask, ...prev]);    // Vai adicionando novas tarefas e deixando as antigas (atualiza a lista)
        setText('');
    }

    function toggleTask(id: string){
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? {...t, done : !t.done} : t))
        );
    }

    function removeTask(id: string){
        setTasks((prev) => prev.filter((t) => t.id !== id));
    }

    return (
        <main>
            <h1 className="text-2xl font-semibold mb-4">To-do Next + TS</h1>

            <div className="flex gap-2 mb-4">
                <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
                placeholder="Digite e Enter..."
                className="flex-1 border rounded px-3 py-2"/>

                <button onClick={addTask}
                className="Rounded bg-black text-white px-4 py-2">
                    Adicionar
                </button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={toggleTask}
                    onRemove={removeTask}/>
                ))}
            </ul>
        </main>
    )
}