import './TodoList.css';
import type {Todo} from '../../../App';

interface TodoListProps {
  value: Todo;
  onUpdate: (value: number) => void;
  onDelete: (value: number) => void;
}
const TodoList = ({value, onUpdate, onDelete}: TodoListProps) => {
  console.log(value);

  const handleUpdate = () => {
    onUpdate(value.id);
  };
  const hadndleDelete = () => {
    onDelete(value.id);
  };

  console.log(value.isChecked)
  return(
    <div className='todo-wrapper'>
      <form 
        className='todo-form'
      >
        <input 
          className='checkbox' 
          type='checkbox'
          onChange={handleUpdate}
        />
        <p className='todo'>{value.todo}</p>
        <section className='right-section'>
          <p>{value.date}</p>
          <button 
            className='delete'
            onClick={() => {
              hadndleDelete();
            }}
          >
            삭제
          </button>
        </section>
      </form>
    </div>
  );
};
export default TodoList;