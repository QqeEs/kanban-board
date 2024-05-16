import Task from "./TaskCard";
import Header from "./Header";

const Section = ({ status, tasks, setTasks, todos, inProgress, done }) => {
    let text = 'Todo';
    let header = { background: 'linear-gradient(0deg, rgba(255,255,255,1) 15%, rgba(93,178,184,1) 44%)' };
    let tasksToMap = todos;

    if (status === 'inprogress') {
        text = 'In Progress';
        header = { background: 'linear-gradient(0deg, rgba(253,187,45,1) 15%, rgba(93,178,184,1) 44%)',
                   border: '5px solid rgb(253, 187, 45)'};
        tasksToMap = inProgress;
    }

    if (status === 'done') {
        text = 'Done';
        header = { background: 'linear-gradient(0deg, rgba(31,144,0,1) 15%, rgba(93,178,184,1) 44%)',
                   border: '5px solid rgb(31, 144, 0)'}
        tasksToMap = done;
    }

    const dropHandler = (e) => {
        e.preventDefault();
        const status = e.currentTarget.getAttribute('data-status')
        const taskKey = e.dataTransfer.getData("taskKey");

        const updatedTasks = tasks.map(task => {
            if (task.key === taskKey) {
                return { ...task, status: status };
            }
            return task;
        });
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    };

    const dragOverHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="section_header"
             onDrop={dropHandler}
             onDragOver={dragOverHandler}
             data-status={status}>
            <Header text={text} header={header} count={tasksToMap.length} />
            {tasksToMap.length > 0 && tasksToMap.map(task =>
                <Task key={task.key} tasks={tasks} setTasks={setTasks} task={task} />)}
        </div>
    );
};

export default Section;