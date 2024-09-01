import { useState } from 'react'


const TaskCard = ({id, name, text, dimension, isCardActive, hideCard, setTaskDone, deleteTask, sendRequest, images}) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedDimension, setSelectedDimension] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedFlow, setSelectedFlow] = useState('');
  const [imageRefs, setImageRefs] = useState('');
  const [generatePerRef, setGeneratePerRef] = useState(0);
  const [manualPrompts, setManualPrompts] = useState('');
  
  const handleRequest = ()=>{
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
    handleGenerateImages(name, selectedImage, images, selectedDimension, selectedStyle, manualPrompts, generatePerRef, selectedFlow)
    hideCard()
  }  

  

  return(
 
    <div className={`main__card ${isCardActive ? '' : 'hidden'}`}>
          <div className='card__container'>
            
              <div className="card__header">
              <div className="card__logo"><span className="card__id">{id}</span> | {name}
                <div className="card__subtitle">Task Card</div>
              </div>
              <button className='card__close' onClick={hideCard}>X</button>
              </div>
              <div className="card__content">
                <div className="card__block"> Task Text | <span className="card__text">"{text}"</span></div>
                <div className="card__block">
        Image | 
        <select onChange={(e) => setSelectedImage(e.target.value)}>
          {images.map((index) => (
            <option className='card__image' key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </div>
      
      <div className="card__block">
        Dimension | 
        <select onChange={(e) => setSelectedDimension(e.target.value)}>
          <option value="16:9">16:9</option>
          <option value="9:16">9:16</option>
          <option value="1:1">1:1</option>
        </select>
      </div>
      
      <div className="card__block">
        Styles | 
        <select onChange={(e) => setSelectedStyle(e.target.value)}>
          <option value="Ultra-realistic">Ultra-realistic</option>
          <option value="Anime style">Anime style</option>
        </select>
      </div>
      
      <div className="card__block">
        Flow | 
        <select onChange={(e) => setSelectedFlow(e.target.value)}>
          <option value="other_models_mix">other_models_mix</option>
          <option value="mj_model">mj_model</option>
        </select>
      </div>
      
      <div className="card__block">
        Image refs | 
        <input
          type="text"
          placeholder="Add refs"
          value={imageRefs}
          onChange={(e) => setImageRefs(e.target.value)}
        />
      </div>
      
      <div className="card__block">
        Generate per ref | 
        <input
          type="number"
          placeholder="Choose amount"
          value={generatePerRef}
          onChange={(e) => setGeneratePerRef(e.target.value)}
        />
      </div>
      
      <div className="card__block">
        Manual prompts | 
        <input
          type="text"
          placeholder="Enter prompts"
          value={manualPrompts}
          onChange={(e) => setManualPrompts(e.target.value)}
        />
      </div>
                
                
                <div className="card__buttons">
                  <button className='card__button del' onClick={() => deleteTask(id)}>Delete</button>
                  <button className='card__button set' onClick={() => setTaskDone(id)} >Set Done</button>
                  <button className='card__button gen' onClick={handleRequest}>Generate</button>

                  </div>
            </div>                                      
          </div>
        </div>
                
   
  )
}

export default TaskCard
