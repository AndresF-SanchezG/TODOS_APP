import React from "react";
import { TodoIcon } from "../TodoIcon/icon";

function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon type='delete' color='gray' onClick={onDelete}/> 
    );
}

export { DeleteIcon }