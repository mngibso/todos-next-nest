import React, {ChangeEvent, useState} from "react";
import {ToDo} from "@/app/types/todo";
import {del as deleteTodo, update as saveTodo} from "@/app/api/todos";


/**
 * Render a single ToDo item. allow user to edit or delete item.
 * @param {ToDo} todo - The todo item
 * @param {function} refresh - call `refresh(true)` to signal data should be refreshed.
 * @constructor
 */
export default function TodoItem({todo, refresh}: { todo: ToDo, refresh:  React.Dispatch<React.SetStateAction<boolean>> }) {
    // true if task is being edited
    const [isEditing, setIsEditing] = useState<boolean>(false);

    // current state of ToDo item
    const [done, setDone] = useState<boolean>(todo.done);
    const [task, setTask] = useState<string>(todo.task);

    const updateCurrentTask = (event: ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    const del = async () => {
        await deleteTodo(todo._id);
        refresh(true);
    }

    const save = async () => {
        setIsEditing(false);
        // don't save empty item
        if (!task.trim()) {
            setTask(todo.task);
            return;
        }
        await saveTodo(todo._id, {task: task.trim(), done});
    }

    const cancel = () => {
        setIsEditing(false);
        setTask(todo.task);
    }
    const setEditState = () => {
        setIsEditing(true);
    }

    const toggleDoneStatus = async () => {
        await saveTodo(todo._id, {done: !done});
        setDone(!done);
    }

    return (
        <div>
            <input type="checkbox" checked={done} onChange={toggleDoneStatus}/>
            {isEditing ? (<>
                    <input
                        type="text"
                        value={task}
                        onChange={updateCurrentTask}
                    />
                    <button className="save action" onClick={save}>save</button>
                    <button className="cancel action" onClick={cancel}>cancel</button>
                </>
            ) : (
                <>
                    <button className={done ? "todo strikethrough" : "todo"} onClick={setEditState}>{task}</button>
                    <button className="delete action" onClick={del}>delete</button>
                </>
            )}
        </div>
    );
}