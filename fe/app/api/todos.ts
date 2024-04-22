import {ToDo} from "@/app/types/todo";

const TODO_URL = 'http://localhost:3000/todos';

export const getAll = async () => {
    const result = await fetch(TODO_URL, {
        method: 'GET',
    });
    return result.json();
}

export const get = async (id: string) => {
    const result = await fetch(`${TODO_URL}/${id}`, {
        method: 'GET',
    });
    return result.json();
}

export const del = async (id: string) => {
    const result = await fetch(`${TODO_URL}/${id}`, {
        method: 'DELETE',
    });
    return;
}

export const update = async (id: string, {task, done}: Partial<ToDo>) => {
    const result = await fetch(`${TODO_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({task, done}),
    });
    return;
}

export const create = async ({task, done = false}: Partial<ToDo>) => {
    const result = await fetch(TODO_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({task, done}),
    });
    return result;
}
