import Task from "./task";

const TaskList = ({ tasks, status, showCard }) => {
  const filteredTasks = status === 'todo' ? tasks.filter((task) => task.status !== 'done') : tasks.filter((task) => task.status === 'done');
  
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
    </tbody>
  );
};

export default TaskList;
