import deleteActivity from './img/delete-activity.png';
import swal from "sweetalert";
import './style/taskCard.css'

const Task = ({ task, tasks, setTasks, status }) => {
    const handleRemove = (key) => {
        const fTask = tasks.filter(t => t.key !== key);

        swal('Удалить запись ?', {
            dangerMode: false,
            buttons: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal('Успешно!', {
                        icon: 'success'
                    })
                    localStorage.setItem('tasks', JSON.stringify(fTask));
                    setTasks(fTask);
                }
            });
    };

    const dragStartHandler = (e) => {
        e.dataTransfer.setData("taskKey", task.key);
        e.target.style.opacity = '0.4';
        e.target.style.cursor = 'grabbing';
    };

    const dragEndHandler = (e) => {
        e.target.style.opacity = '1';
        e.target.style.cursor = 'pointer';

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

    return (
        <div className="tasks"
            draggable='true'
            onDragStart={dragStartHandler}
            onDragEnd={dragEndHandler}>
            
            <p className='obj'>Activity</p>
            <p>{task.activity}</p>
            <p className='obj'>Type</p>
            <p>{task.type}</p>
            <p className='obj'>Participants</p>
            <p>{task.participants}</p>
            <p className='obj'>Price</p>
            <p>{task.price}</p>
            <button className="deleteActivity" onClick={() => handleRemove(task.key)}>
                <img src={deleteActivity} alt="" />
            </button>
        </div>
    );
};

export default Task;