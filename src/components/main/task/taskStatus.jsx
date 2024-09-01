

const TaskStatus = ({status, setStatus, goToStatusDone, goToStatusToDo})=>{

  

  
  let statusText;
  let statusClass;

switch (status) {
  case 'todo':
    statusText = 'To Do';
    statusClass = 'todo';
    break;
  case 'done':
    statusText = 'Done';
    statusClass = 'done';
    break;
  case 'removed':
    statusText = 'Removed';
    statusClass = 'removed';
    break;
  default:
    statusText = 'Unexpected'; 
    statusClass = '';
    break;
}


  

  return(
    <div className="status">
      <div className='status__text'>Tasks Status</div>
      <div className={`status__value ${statusClass}`}>{statusText}</div>
    </div>
  )
}

export default TaskStatus