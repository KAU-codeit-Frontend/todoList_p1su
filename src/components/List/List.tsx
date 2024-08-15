import TodoList from './TodoList/TodoList';

const List = () => {
  return(
    <div>
      <h5>Todo List</h5>
      <form>
        <input placeholder='검색어를 입력하세요'/>
      </form>
      
      <TodoList />
    </div>
  );
};
export default List;