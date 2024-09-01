import EmptyBlock from "../empty-block";
import Task from "./task";

const TaskList = ({ tasks, status, showCard }) => {
  let filteredTasks;

switch (status) {
  case 'todo':
    filteredTasks = tasks.filter((task) => task.status !== 'done' && task.status !== 'removed');
    break;
  case 'done':
    filteredTasks = tasks.filter((task) => task.status === 'done');
    break;
  case 'removed':
    filteredTasks = tasks.filter((task) => task.status === 'removed');
    break;
  default:
    filteredTasks = tasks; 
    break;
}
  
  return (
    <tbody>
      {filteredTasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          id={task.id}
          name={task.name}
          dimension={task.dimension}
          templateId={task.templateId}
          images={task.images}
          text={task.text}
          ammount={task.ammount}
          genType={task.genType}
          showCard={showCard}
          status={task.status}
        />
      ))}
      {filteredTasks.length === 0 ? (
          <EmptyBlock status={status}/>
        ) : ''}
    </tbody>
  );
};

export default TaskList;
