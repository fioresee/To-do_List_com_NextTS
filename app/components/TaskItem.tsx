'use client';
import { Task } from "../types";

 type Props = {
    task: Task;
    onToggle(id: string): void;
    onRemove(id: string): void;
 };

 export default function TaskItem({task, onToggle, onRemove}: Props) {
    return (
        <li className="flex items-center gap-3 border-b py-2">
            <input 
            type="checkbox"
            checked={task.done}
            onChange={() => onToggle(task.id)}
            className="size-4"
            />
            <label className={task.done ? 'line-through text-zinc-500' : ''}>
                {task.text}
            </label>
            <button onClick={() => onRemove(task.id)}
                className="ml-auto text-sm underline">
                Remover
            </button>
        </li>
    )
 }