import React from "react";

type ToDoItem = {
    id: string;
    text: string;
    completed: boolean;
    createdTimestamp: string;
};

const ToDoGrid = () => {

    function saveToLocalStorage(value: string): void {
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
        localStorage.setItem('todoItems', JSON.stringify(todoItems));
    }

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>): void {
        event.preventDefault();
        const inputElement = event.currentTarget;
            const newItem = inputElement.value.trim();
            if (newItem) {
                saveToLocalStorage(newItem);
                inputElement.value = ''; // Clear the input field
            }
    }

    function onKeyEnter(event: React.KeyboardEvent<HTMLInputElement>): void {
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
    }

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
                    </tbody>
                </table>
            </form>
        </section>
    </>);
}

export default ToDoGrid;