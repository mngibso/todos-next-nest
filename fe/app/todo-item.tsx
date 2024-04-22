import {useState} from "react";
import {ToDo} from "@/app/types/todo";
import {del as deleteTodo, update as saveTodo} from "@/app/api/todos";


export default function TodoItem({todo, refresh}: { todo: ToDo, refresh: any }) {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [done, setDone] = useState<boolean>(todo.done);
    const [task, setTask] = useState<string>(todo.task);
    // @ts-ignore
    const update = ({target: {value}}) => {
        setTask(value);
    }

    const del = async () => {
        await deleteTodo(todo._id);
        refresh(true);
    }

    const save = async () => {
        setIsEditing(false);
        // don't save empty item
        if (!task) {
            setTask(todo.task);
            return;
        }
        await saveTodo(todo._id, {task, done});
    }

    const cancel = () => {
        setIsEditing(false);
        setTask(todo.task);
    }
    const edit = () => {
        setIsEditing(true);
    }

    const toggleDone = async () => {
        await saveTodo(todo._id, {done: !done});
        setDone(!done);
    }

    return (
        <div>
            <input type="checkbox" checked={done} onChange={toggleDone}/>
            {isEditing ? (<>
                    <input
                        type="text"
                        value={task}
                        onChange={update}
                    />
                    <button className="save action" onClick={save}>save</button>
                    <button className="cancel action" onClick={cancel}>cancel</button>
                </>
            ) : (
                <>
                    <button className={done ? "todo strikethrough" : "todo"} onClick={edit}>{task}</button>
                    <button className="delete action" onClick={del}>delete</button>
                </>
            )}
        </div>
    );
}