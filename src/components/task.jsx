import { useState } from 'react'


const Task = ({ id, name, dimension, templateId, images, text, ammount, genType, task, toggleCard, isOpen})=>{

  const generationText = genType == 1 ? "cyclic_generation" : "random_generation";
  const generationClass = genType == 1 ? "cyclic" : "random";

  const idTemplateText = templateId == 1 ? "mwpswxcudtwxb" : "0xdoscyowl50c";
  const idTemplateClass = templateId == 1 ? "first" : "second";

  
  let dimensionText;
  let dimensionClass;

  switch (dimension) {
    case '1x1':
      dimensionText = "1x1";
      dimensionClass = "small"
      break;
    case '16x9':
      dimensionText = "16x9";
      dimensionClass = "medium"
      break;
    case '9x16':
      dimensionText = "9x16";
      dimensionClass = "large"
      break;
    default:
      dimensionText = "Unknown Dimension";
  }
    
  const closeCard = () => {
    toggleCard(id); 
  };
    

  return(
    <tr className="main__table-row" onClick={() => toggleCard(id)}>
                  <td className="main__table-item"><div className="title"><span>{id}</span>{name}</div></td>
                  <td className="main__table-item"><div className={`item__dimension ${dimensionClass}`}>{dimensionText}</div></td>
                  <td className="main__table-item"><div className={`item__id ${idTemplateClass}`}>{idTemplateText}</div></td>
                  <td className="main__table-item">
                    <div className="item-img">
                    {images.map((image, index) => (
                      <h6 key={index}>{image}</h6> 
                    ))}
                    </div>
                  </td>
                  <td className="main__table-item">{text}</td>
                  <td className="main__table-item">{ammount}</td>
                  <td className="main__table-item">
                    <div className={`item__gener ${generationClass}`}>
                      {generationText}
                    </div>
                  </td>
                  <td className="main__table-item"><button className="main__table-item-button generate">Generate</button></td>
                  <td className="main__table-item last"><button className="main__table-item-button folder">Folder</button></td>
                  {isOpen && (
                  <div className="main__card">
                    <div className='card__container'>
                      
                        <div className="card__header">
                        <div className="card__logo">{id} | {name}</div>
                        <button className='card__close' onClick={closeCard}>X</button>
                        </div>
                        <div className="card__content">
                          <div className="card__block">Dimension | {dimension}</div>
                          <div className="card__block">Flow</div>
                          <div className="card__block">Image Refs</div>
                          <div className="card__block">Manual prompts</div>
                          <div className="card__block">Generate per ref</div>
                          <div className="card__block">Styles</div>
                          <button className='card__button'>Generate</button>


                        </div>

                        
                    

                    </div>
                    
                    
                  </div>
                          )}
             </tr>
  )
}

export default Task