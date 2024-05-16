import { useDispatch } from 'react-redux';
import { getRandomActivity } from '../store/activitySlice';

import './style/createActivity.css';

const CreateActivity = ({ tasks, setTasks }) => {
    const dispatch = useDispatch();

    const handleGetRandomActivity = () => {
        dispatch(getRandomActivity())
            .then((resultAction) => {
                const newTask = resultAction.payload;
                if (newTask) {
                    setTasks((prevTasks) => [...prevTasks, newTask]);
                    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
                }
            });
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <button className="button" onClick={handleGetRandomActivity}>
                Get random activity
            </button>
        </form>
    );
};

export default CreateActivity;