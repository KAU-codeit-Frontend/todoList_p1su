import './TodoList.css';
import type {Todo} from '../../../App';

interface TodoListProps {
  key: string;
  value: Todo;
}
const TodoList = ({key, value}: TodoListProps) => {
  console.log(value);
  return(
    <div className='todo-wrapper'>
      <form className='todo-form'>
        <input className='checkbox' type='checkbox'/>
        <p className='todo'>{value.todo}</p>
        <section className='right-section'>
          <p>{value.date}</p>
          <button type='submit'>
            삭제
          </button>
        </section>
      </form>
    </div>
  );
};
export default TodoList;