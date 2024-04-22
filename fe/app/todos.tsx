"use client";

import {useEffect, useState} from "react"
import TodoItem from "@/app/todo-item";
import {ToDo} from "@/app/types/todo";
import {create as addTodo, getAll} from "@/app/api/todos";

const ToDos = () => {

    const revalidatedData = async () => {
        return getAll();
    }

    const [loadData, setLoadData] = useState(true);
    const [todos, setTodos] = useState<ToDo[]>([])
    const [newTodo, setNewTodo] = useState<string>("")

    // @ts-ignore
    const setNew = ({target: {value}}) => {
        setNewTodo(value);
    }
    const add = async () => {
        // don't save empty item
        if (!newTodo) {
            return;
        }
        await addTodo({task: newTodo});
        setNewTodo("");
        setLoadData(true);
    }

    useEffect(() => {
        if (!loadData)
            return;

        setLoadData(false)

        revalidatedData()
            .then(res => {
                setTodos(res)
            })
    }, [loadData])


    return (
        <>
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    ToDo List
                </p>
                <div className="new-todo">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={setNew}
                    />
                    <button className="save action" onClick={add}>Add ToDo</button>
                </div>
                <hr/>
                <ul className="todo-list">{todos.map((t) => (
                    <li key={t._id}><TodoItem todo={t} refresh={setLoadData}/></li>
                ))}</ul>
            </div>
        </>
    )
}
export default ToDos;