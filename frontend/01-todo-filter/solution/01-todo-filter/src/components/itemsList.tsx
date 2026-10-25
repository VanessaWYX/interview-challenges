import React from "react";
import { ToDoItem } from "./todoGrid";

type ItemsListProps = {
    items: ToDoItem[];
    setItems: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
};

const ItemsList = ({ items, setItems }: ItemsListProps): React.ReactNode => {
    const handleItemChecked = (e: React.ChangeEvent<HTMLInputElement>, itemId: string): void => {
        e.stopPropagation();
        const updatedItems = items.map(i => {
            if (i.id === itemId) {
                return { ...i, completed: !i.completed };
            }
            return i;
        });
        setItems(updatedItems);
        localStorage.setItem('todoItems', JSON.stringify(updatedItems));
    };

    const handleItemDeleted = (itemId: string) => {
        const updatedItems = items.filter(i => i.id !== itemId);
        setItems(updatedItems);
        localStorage.setItem('todoItems', JSON.stringify(updatedItems));
    };

    return (
        <>
            {items.sort((a, b) => a.createdTimestamp.localeCompare(b.createdTimestamp)).map((item) => (
                <tr key={item.id}>
                    <td>{item.text}</td>
                    <td>
                        <input type="checkbox" id={`checkbox-${item.id}`} checked={item.completed} onChange={(e)=>{handleItemChecked(e, item.id)}} />
                    </td>
                    <td>
                        <button onClick={() => handleItemDeleted(item.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </>);
}

export default ItemsList;