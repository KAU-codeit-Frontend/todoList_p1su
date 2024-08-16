import './List.css';
import TodoList from './TodoList/TodoList';
import type {Todo} from '../../App';
interface ListProps {
  values: Todo[];
}
const List = ({values}: ListProps) => {
  console.log(values)
  return(
    <div className='list-wrapper'>
      <h5 className='list-title'>Todo List</h5>
      <form>
        <input className='search-input' placeholder='검색어를 입력하세요'/>
      </form>
      {
        values.map((value) => {
          <TodoList 
            key={value.todo}
            value={value}
          />
        })
      }

    </div>
  );
};
export default List;