// import { useState } from "react";
import Task from "./task";

const TaskList = ({ tasks, toggleCard, openCardId}) => {
 
  return (
    <tbody>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          id = {task.id}
          name={task.name}
          dimension={task.dimension}
          templateId={task.templateId}
          images={task.images}
          text={task.text}
          ammount={task.ammount}
          genType={task.genType}
          toggleCard={toggleCard}
          isOpen={openCardId === task.id}
          
        />
      ))}
    </tbody>
  );
};

export default TaskList;

