// Write your code here
import './index.css'

const TodoItem = props => {
  const {TodoDetails, deleteItem} = props
  const {title, id} = TodoDetails
  const onDeleteButton = () => {
    deleteItem(id)
  }
  return (
    <li className="todo-item">
      <div className="card">
        <p className="paragraph">{title}</p>
        <button className="button" type="button" onClick={onDeleteButton}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
