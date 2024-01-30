import React, {useState, useEffect} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./components/types/types";
import List from "./components/List";
import axios from "axios";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])
    
    useEffect(() => {
        fetchUsers()
        fetchTodos()
        
    }, [])
    
    // получение пользователей
    // get-запрос в ответе ожидаем массив пользователей (указано в дженерике)
    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }
    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }
    
    return (
        <div>
            <EventsExample/>
          <Card onClick={(num) => console.log('click', num)} variant={CardVariant.outlined} width='200px' height='200px'>
              <button>Кнопка</button>
          </Card>
            <List 
                items={users}
                renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
            />
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
            />
        </div>
    );
};

export default App;