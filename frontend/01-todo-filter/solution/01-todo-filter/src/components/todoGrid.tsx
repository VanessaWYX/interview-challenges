import React, { useCallback, useEffect, useState } from "react";
import ItemsList from "./itemsList";

export type ToDoItem = {
    id: string;
    text: string;
    completed: boolean;
    createdTimestamp: string;
};

const ToDoGrid = (): React.ReactNode => {
    const [items, setItems] = useState<ToDoItem[]>([]);

    const saveToLocalStorage = useCallback((value: string): void => {
        const itemId = crypto.randomUUID();
        const newItem: ToDoItem = {
            id: itemId,
            text: value,
            completed: false,
            createdTimestamp: new Date().toISOString(),
        };

        const existingItems = localStorage.getItem('todoItems');
        const todoItems: ToDoItem[] = existingItems ? JSON.parse(existingItems) : [];
        todoItems.push(newItem);
        setItems(todoItems);
        localStorage.setItem('todoItems', JSON.stringify(todoItems));
    }, [setItems]); 

    const handleSubmit = useCallback((event: React.SubmitEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const inputElement = event.currentTarget;
            const newItem = inputElement.value.trim();
            if (newItem) {
                saveToLocalStorage(newItem);
                inputElement.value = ''; // Clear the input field
            }
    }, [saveToLocalStorage]);

    const onKeyEnter = useCallback((event: React.KeyboardEvent<HTMLInputElement>): void => {
        if(event.key === 'Enter') {
            event.preventDefault();
            const inputElement = event.currentTarget;
            const newItem = inputElement.value.trim();
            if (newItem) {
                console.log('key enter - New item:', newItem);
                // Add the new item to the list (you can implement this logic)
                saveToLocalStorage(newItem);
                inputElement.value = ''; // Clear the input field
            }
        }
    }, [saveToLocalStorage]);

    useEffect(() => {
        const existingItems = localStorage.getItem('todoItems');
        if (existingItems) {
            const todoItems: ToDoItem[] = JSON.parse(existingItems);
            console.log('Existing items from localStorage:', todoItems);
            setItems(todoItems);
        }
    }, []);

    return(
    <>
        <section id="todogrid">
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                To Do Items
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" id="item1" name="item1" placeholder="Enter item" onKeyDown={onKeyEnter}/>
                            </td>
                        </tr>
                       <ItemsList items={items} setItems={setItems} />
                    </tbody>
                </table>
            </form>
        </section>
    </>);
}

export default ToDoGrid;