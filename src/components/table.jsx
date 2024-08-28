import { useState } from 'react'
import { ReactTyped } from 'react-typed';

import ArrowImg from "../images/arrow.png";
import ammountImg from "../images/ammount.png"
import genImg from "../images/gen.png"
import idImg from "../images/id.png"
import imageImg from "../images/image.png"
import nameImg from "../images/name.png"
import resultImg from "../images/result.png"
import sizeImg from "../images/size.png"
import textImg from "../images/text.png"
import TaskList from './taskList'










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
    },
    {
      id:5,
      name: 'RS_X',
      dimension: '1x1',
      templateId: 1,
      images: ['img-1', 'img-2', 'img-3'],
      text: 'Hello world',
      ammount: 50,
      genType: 2,
    }
  ])
  
  const [newTask, setNewTask] = useState({
    name: '',
    dimension: '1x1',
    templateId: '1',
    text: '',
    ammount: '',
    genType: '1',
    images: [],  
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
    const images = newTask.images.map((file) => file.name); 
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

  const [openCardId, setOpenCardId] = useState(null);

  const toggleCard = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };
  
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
      <div className="main__table-wrapper">
      
        <table className="main__table">
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
          
              <TaskList tasks={tasks} setTasks={setTasks} toggleCard={toggleCard} openCardId={openCardId}/>
              <tr className="main__table-row">
                  <th className="main__table-item"><input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Add Task Name"
                  value={newTask.name}
                  onChange={handleInputChange}
                /></th>
                  <th className="main__table-item"> <select
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
                  <th className="main__table-item"><select
                  name="templateId"
                  value={newTask.templateId}
                  onChange={handleInputChange}
                  required
                >
                                                          <option value="2">0xdoscyowl50c</option>
                                                          <option value="1">mwpswxcudtwxb</option>
                                                          
                                                     </select></th>
                  <th className="main__table-item" style={{ display: 'flex', alignItems: 'center', height: '60px', gap: '5px'}}>Add Image 
                  <input className='item__inputt'
                  type="file"
                  multiple
                  onChange={handleFileChange}
                />
                
                </th>
                  <th className="main__table-item"><input
                  className="input"
                  type="text"
                  name="text"
                  placeholder="Add Task Text"
                  value={newTask.text}
                  onChange={handleInputChange}
                /></th>
                  <th className="main__table-item"><input
                  className="input"
                  type="text"
                  name="ammount"
                  placeholder="Add Ammount"
                  value={newTask.ammount}
                  onChange={handleInputChange}
                /></th>
                  <th className="main__table-item"><select
                  name="genType"
                  value={newTask.genType}
                  onChange={handleInputChange}
                  required
                >
                                                          <option value="2">random_generation</option>
                                                          <option value="1">cyclic_generation</option>
                                                          
                                                     </select></th>
                  <th className="main__table-item"><button className="main__table-item-button generate">Generate</button></th>
                  <th className="main__table-item"><button className="main__table-item-button folder">Folder</button></th>
              </tr>
              
      </table>
      <div className="main__buttons">
        <button className='main__buttons-button' onClick={addTask}>Add Task</button>
      </div>
      </div>
    <div className="main__table-footer">
          <div className="main__table-footer-text">Renesandro Tasks | {formattedDate}</div>
          <div className="main__table-footer-btns">
            <button className="main__table-footer-button prev"><img src={ArrowImg} alt="Arrow" /></button>
            <button className="main__table-footer-button">1</button>
            <button className="main__table-footer-button">2</button>
            <button className="main__table-footer-button next"><img src={ArrowImg} alt="Arrow" /></button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Table