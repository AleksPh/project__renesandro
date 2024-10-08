import { useState } from 'react'
import { ReactTyped } from 'react-typed';

import ArrowImg from "../../images/arrow.png";
import ammountImg from "../../images/ammount.png"
import genImg from "../../images/gen.png"
import idImg from "../../images/id.png"
import imageImg from "../../images/image.png"
import nameImg from "../../images/name.png"
import resultImg from "../../images/result.png"
import sizeImg from "../../images/size.png"
import textImg from "../../images/text.png"
import TaskList from './task/taskList'

import TaskStatus from './task/taskStatus';
import TaskCard from './task/taskCard';


const Table = ()=>{

  const [tasks, setTasks] = useState([
    {
      id:1,
      name: 'RS_D',
      dimension: '1x1',
      templateId: 2,
      images: ['img-1', 'img-2'],
      text: 'Hello world',
      ammount: 30,
      genType: 1,
      status: 'todo'
    },
    {
      id:2,
      name: 'RS_M',
      dimension: '9x16',
      templateId: 1,
      images: ['img-1', 'img-2', 'img-3'],
      text: 'Hello world',
      ammount: 40,
      genType: 2,
      status: 'todo'
    },
    {
      id:3,
      name: 'RS_L',
      dimension: '16x9',
      templateId: 2,
      images: ['img-1', 'img-2', 'img-3'],
      text: 'Hello world',
      ammount: 20,
      genType: 1,
      status: 'todo'
    },
    {
      id:4,
      name: 'RS_S',
      dimension: '16x9',
      templateId: 2,
      images: ['img-1', 'img-2'],
      text: 'Hello world',
      ammount: 30,
      genType: 2,
      status: 'todo'
    },
    {
      id:5,
      name: 'RS_G',
      dimension: '9x16',
      templateId: 1,
      images: ['img-1', 'img-2'],
      text: 'Hello world',
      ammount: 10,
      genType: 1,
      status: 'done'
    },
    {
      id:6,
      name: 'RS_L',
      dimension: '16x9',
      templateId: 2,
      images: ['img-1', 'img-2', 'img-3'],
      text: 'Hello world',
      ammount: 40,
      genType: 2,
      status: 'done'
    },
    {
      id:7,
      name: 'RS_L1',
      dimension: '1x1',
      templateId: 1,
      images: ['img-1'],
      text: 'Hello world',
      ammount: 70,
      genType: 1,
      status: 'done'
    }
    
  ])
  
  const removeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: 'removed' } : task
      )
    );
    hideCard();
  };
  const restoreTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: 'todo' } : task
      )
    );
    hideCard();
  };
  
  const setTaskDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: 'done' } : task
      )
    );
    hideCard()
  };


  const [isCardActive, setCardActive] = useState(false)
  const [activeTaskId, setActiveTaskId] = useState(null);

  const showCard = (taskId) => {
    setActiveTaskId(taskId);
    setCardActive(true);
  };

  const hideCard = () => {
    setCardActive(false);
    setActiveTaskId(null);
  };

const sendRequest = () => {
  const handleGenerateImages = async (taskName, layer, taskImages, taskDimension, style, prompts, amm, flow) => {
    const requestBody = {
      assigned_task_name: taskName, 
      layer_name: layer, 
      images: taskImages, 
      dimension: taskDimension, 
      style: style, 
      manual_prompts: prompts, 
      gen_per_ref: amm, 
      flow: flow, 
    };
  
    try {
      const response = await fetch(
        'https://tz-front-jvqis72guq-lm.a.run.app/api/genereate_images_tz', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }
      );
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  handleGenerateImages()
  hideCard()
  console.log('Request sent')
}

  const [newTask, setNewTask] = useState({
    name: '',
    dimension: '1x1',
    templateId: '1',
    text: '',
    ammount: '',
    genType: '1',
    images: [],  
    status: 'todo'
  });

  const [imageFiles, setImageFiles] = useState([]); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); 
    setNewTask((prevTask) => ({
      ...prevTask,
      images: files, 
    }));
  };
  
  const addTask = () => {
    const images = newTask.images.map((file) => file.name.slice(0, 4) + '..'); 
    const taskToAdd = {
      ...newTask,
      id: tasks.length + 1,
      images,
    };

    setTasks([...tasks, taskToAdd]);
    setNewTask({
      name: '',
      dimension: '1x1',
      templateId: '1',
      text: '',
      ammount: '',
      genType: '1',
      images: [],
    });
    setImageFiles([]);
  };

  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1; 
  const year = today.getFullYear();
  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;
  const formattedDate = `${day}.${month}.${year}`;

  const goToStatusToDo = ()=>{
    setStatus('todo')
    console.log('Current status:', status);
  }
  const [status, setStatus] = useState('todo')
  const goToStatusDone = ()=>{
    setStatus('done')
    console.log('Current status:', status);
  }
  const goToStatusRemoved = ()=>{
    setStatus('removed')
    console.log('Current status:', status);
  }

  return(
    <div className="main">
      <div className="main__title">
        
      <ReactTyped
        strings={['Task Table, 👋']}
        typeSpeed={80}
        backSpeed={60}
        loop = {false}
      />

      </div>
      <div className="main__content">

      {activeTaskId && (
          <TaskCard
            id={activeTaskId}
            name={tasks.find(task => task.id === activeTaskId).name}
            text={tasks.find(task => task.id === activeTaskId).text}
            dimension={tasks.find(task => task.id === activeTaskId).dimension}
            images={tasks.find(task => task.id === activeTaskId).images}
            status={tasks.find(task => task.id === activeTaskId).status}

            isCardActive={isCardActive}
            hideCard={hideCard}
            setTaskDone={setTaskDone}
            deleteTask={removeTask}
            restoreTask={restoreTask}
            sendRequest={sendRequest}
            
          />
        )}

      <TaskStatus status={status} setStatus={setStatus} goToStatusDone={goToStatusDone} goToStatusToDo={goToStatusToDo}/>
      <div className="main__table-wrapper">
        
        <table className={`main__table ${status === "removed" ? "blured" : ""}`}>
          
          <thead>
              <tr className="main__table-row head">
                  <th className="main__table-item"><img src={nameImg} alt="" className='item__logo-img'/>Task Name</th>
                  <th className="main__table-item"><img className='item__logo-img' src={sizeImg} alt="" />Dimension </th>
                  <th className="main__table-item"><img className='item__logo-img' src={idImg} alt="" />Template ID </th>
                  <th className="main__table-item"><img className='item__logo-img' src={imageImg} alt="" />Images</th>
                  <th className="main__table-item"><img className='item__logo-img' src={textImg} alt="" />Text</th>
                  <th className="main__table-item"><img className='item__logo-img' src={ammountImg} alt="" />Ammount</th>
                  <th className="main__table-item"><img className='item__logo-img' src={genImg} alt="" />Gen type </th>
                  <th className="main__table-item">Gen_tasks</th>
                  <th className="main__table-item"><img className='item__logo-img' src={resultImg} alt="" />Result Ads</th>
              </tr>
          </thead>
          
              <TaskList tasks={tasks} setTasks={setTasks} status={status} showCard={showCard}/>
              <tr className={`main__table-row ${status === "todo" ? "" : "hidden"}`}>
                <th className="main__table-item">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Add Task Name"
                    value={newTask.name}
                    onChange={handleInputChange}
                    onBlur={() => {
                      if (newTask.name.length < 3 || newTask.name.length > 15) {
                        alert("Name must be between 3 and 15 characters long.");
                      }
                    }}
                  />
                </th>
                <th className="main__table-item">
                  <select
                    name="dimension"
                    value={newTask.dimension}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="1x1">1x1</option>
                    <option value="16x9">16x9</option>
                    <option value="9x16">9x16</option>
                  </select>
                </th>
                <th className="main__table-item">
                  <select
                    name="templateId"
                    value={newTask.templateId}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="2">0xdoscyowl50c</option>
                    <option value="1">mwpswxcudtwxb</option>
                  </select>
                </th>
                <th
                  className="main__table-item"
                  style={{ display: 'flex', alignItems: 'center', height: '60px', gap: '5px', paddingLeft: '18px' }}
                >
                  Add Image
                  <input
                    className='item__inputt'
                    type="file"
                    multiple
                    onChange={(e) => {
                      const files = e.target.files;
                      if (files.length > 4) {
                        alert("You can only upload a maximum of 4 files.");
                      } else {
                        handleFileChange(e);
                      }
                    }}
                  />
                </th>
                <th className="main__table-item">
                  <input
                    className="input"
                    type="text"
                    name="text"
                    placeholder="Add Task Text"
                    value={newTask.text}
                    onChange={handleInputChange}
                    onBlur={() => {
                      if (newTask.text.length < 5 || newTask.text.length > 50) {
                        alert("Text must be between 5 and 50 characters long.");
                      }
                    }}
                  />
                </th>
                <th className="main__table-item">
                  <input
                    className="input"
                    type="number"
                    name="ammount"
                    placeholder="Add Ammount"
                    value={newTask.ammount}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value < 1 || value > 99) {
                        alert("Ammount must be a number between 1 and 99.");
                      } else {
                        handleInputChange(e);
                      }
                    }}
                  />
                </th>
                <th className="main__table-item">
                  <select
                    name="genType"
                    value={newTask.genType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="2">random_generation</option>
                    <option value="1">cyclic_generation</option>
                  </select>
                </th>
                <th className="main__table-item">
                  <button className="main__table-item-button generate">Generate</button>
                </th>
                <th className="main__table-item">
                  <button className="main__table-item-button folder">Folder</button>
                </th>
              </tr>
              
              
      </table>
      <div className="main__buttons">
        <button className={`main__buttons-button ${status === "todo" ? "" : "hidden"}`} onClick={addTask}>Add Task</button>
      </div>
      </div>
    <div className="main__table-footer">
          <div className="main__table-footer-text">Renesandro Tasks | {formattedDate}</div>
          <div className="main__table-footer-btns">
            
            <button className={`main__table-footer-button ${status == 'todo' ? 'active' : ''} `} onClick={goToStatusToDo}>1</button>
            <button className={`main__table-footer-button ${status == 'done' ? 'active' : ''} `} onClick={goToStatusDone}>2</button>
            <button className={`main__table-footer-button ${status == 'removed' ? 'active' : ''} `} onClick={goToStatusRemoved}>3</button>

           
          </div>

        </div>
      </div>
    </div>
  )
}

export default Table