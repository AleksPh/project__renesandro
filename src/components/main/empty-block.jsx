import emptyImage from "../../images/empty.png"

const EmptyBlock = ({status}) =>{
  return(
    <div className={`empty__block ${status === 'todo' ? 'hidden' : ''}`}>
            <span className="empty__text">There are currently no tasks here!</span>
            <img className="empty__image" src={emptyImage} alt="Empty Image" />
          </div>
  )
}

export default EmptyBlock