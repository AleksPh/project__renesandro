const Task = ({ id, name, dimension, templateId, images, text, ammount, genType, task, showCard})=>{

  const generationText = genType == 1 ? "cyclic_generation" : "random_generation";
  const generationClass = genType == 1 ? "cyclic" : "random";

  const idTemplateText = templateId == 1 ? "mwpswxcudtwxb" : "0xdoscyowl50c";
  const idTemplateClass = templateId == 1 ? "first" : "second";

  const url = `https://testapi-jvqis72guq-lm.a.run.app/test_vidro/${name}_${dimension}/format_validation`;
  
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

  const handleGenerate = async () => {
    const requestBody = {
      task_name: name,
      dimension: dimension,
      template_id: templateId,
      amount: ammount, 
      gen_type: genType,
      image_layers: images, 
      text_layers: [text] 
    };

    try {
      const response = await fetch(
        "https://tz-front-jvqis72guq-lm.a.run.app/api/genereate_formats_tz",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestBody)
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Response received:", data);
      } else {
        console.error("Failed to generate:", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return(
    <tr className="main__table-row" >
                  <td className="main__table-item" onClick={() => showCard(id)}><div className="title"><span>{id}</span>{name}</div></td>
                  <td className="main__table-item"><div className={`item__dimension ${dimensionClass}`}>{dimensionText}</div></td>
                  <td className="main__table-item"><div className={`item__id ${idTemplateClass}`}>{idTemplateText}</div></td>
                  <td className="main__table-item">
                    <div className="item-img">
                    {images.map((index) => (
                      <h6 key={index}>{index}</h6>
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
                  <td className="main__table-item"><button className="main__table-item-button generate" onClick={handleGenerate}>Generate</button></td>
                  <td className="main__table-item last"><button className="main__table-item-button folder"><a  target='_blank' href={url}>Folder</a></button></td>

             </tr>
  )
}

export default Task