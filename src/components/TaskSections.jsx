import { useEffect, useState } from "react";
import Section from "./Section";

import './style/taskSections.css';

const TaskSections = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);   

    useEffect(() => {
        const fTodos = tasks.filter(task => task.status === 'todo');
        const fInProgress = tasks.filter(task => task.status === 'inprogress');
        const fDone = tasks.filter(task => task.status === 'done');

        setTodos(fTodos);
        setInProgress(fInProgress);
        setDone(fDone);
    }, [tasks]);

    const statuses = ['todo', 'inprogress', 'done'];

    return (
        <div className="sections">
            {statuses.map((status, index) => (
                <Section key={status}
                         status={status}
                         tasks={tasks}
                         setTasks={setTasks}
                         todos={todos}
                         inProgress={inProgress}
                         done={done} />))}
        </div>
    );
};

export default TaskSections;