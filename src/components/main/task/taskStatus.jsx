

const TaskStatus = ({status, setStatus, goToStatusDone, goToStatusToDo})=>{

  

  
  const statusText = status == 'todo' ? 'To Do' : 'Done'


  

  return(
    <div className="status">
      <div className='status__text'>Tasks Status</div>
      <div className={`status__value ${status == 'todo' ? 'todo' : 'done'} `}>{statusText}</div>
    </div>
  )
}

export default TaskStatus