import React, {FC} from 'react';
import {ITodo} from "./types/types";

interface TodoItemsProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemsProps> = ({todo}) => {
    return (
        <div>
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;