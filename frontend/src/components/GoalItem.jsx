import { useDispatch } from "react-redux";
import {deleteGoal} from '../features/goals/goalSlice';
import {toast} from 'react-toastify';
function GoalItem({goal}) {
    const dispatch=useDispatch();
    const deleteHandler=()=>{
        dispatch(deleteGoal(goal._id))
        toast.success('Goal has been deleted.')
    }
  return (
    <div className="goal">
        <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
        <h2>{goal.text}</h2>
        <button onClick={deleteHandler} className="close">X</button>
    </div>
  )
}

export default GoalItem