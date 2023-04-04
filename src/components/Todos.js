import './Todos.css';
import { useEffect, useState } from 'react';


export const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [isAllCompleted, setIsAllCompleted] = useState(false);
    const [percentage, setPercentage] = useState(0);


    useEffect(()=> {
        fetch('https://dummyjson.com/todos')
        .then((response) => response.json())
        .then((data) => {setTodos(() => data.todos)});
    }, []);

    useEffect(() => {
        const isAllCompleted = todos.every((item) => item.completed);
        setIsAllCompleted(isAllCompleted);

        const completedTodos = todos.filter((item) => item.completed).length;
        if (!completedTodos || !todos.length) return setPercentage(0);
        const percentage = (completedTodos / todos.length) * 100;
        setPercentage(percentage);
    }, [todos]);

    const onChangeIsCompleted = (id) => {
        const updateTodos = todos.map((item) => {
            if (item.id === id) {
                return{
                    ...item,
                    completed: !item.completed,
                };
            }
            return item;
        });
        setTodos(updateTodos);
    }

    return (
        <div className="todos-wrapper">
        <h1>Todos</h1>
        {todos.map((item) => {
            return (
                <div key={item.id} className='todo'>
                    <input type='checkbox' checked={item.completed} onChange={() => onChangeIsCompleted(item.id)} />
                    <span>{item.todo}</span>
                </div>
                );
        })}
        <h3>Percentage of tasks completed: {percentage.toFixed(1)}%</h3>
        {isAllCompleted && <h3>All items are complited!</h3>}
        </div> 
    );
};