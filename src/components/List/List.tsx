import './List.css';
import TodoList from './TodoList/TodoList';

const List = () => {
  return(
    <div className='list-wrapper'>
      <h5 className='list-title'>Todo List</h5>
      <form>
        <input className='search-input' placeholder='검색어를 입력하세요'/>
      </form>
      
      <TodoList />
      <TodoList />
    </div>
  );
};
export default List;