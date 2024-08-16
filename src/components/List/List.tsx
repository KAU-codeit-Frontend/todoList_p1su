import './List.css';
import { useState } from 'react';
import TodoList from './TodoList/TodoList';
import type {Todo} from '../../App';
interface ListProps {
  values: Todo[];
  onUpdate: (value: number) => void;
}
const List = ({values, onUpdate}: ListProps) => {
  const [search, setSearch] = useState('');
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilteredTodo = () => {
    console.log(search)
    if(search === ''){
      return values;
    }
    return values.filter((value) => 
      value.todo.includes(search)
    );
  };

  const filteredValues = getFilteredTodo();

  return(
    <div className='list-wrapper'>
      <h5 className='list-title'>Todo List</h5>
      <form>
        <input 
          className='search-input' 
          placeholder='검색어를 입력하세요'
          value={search}
          onChange={handleSearch}
        />
      </form>
      <>
        {
          filteredValues.map((value) => (
            <TodoList 
              key={value.id}
              value={value}
              onUpdate={onUpdate}
            />
          ))
        }
      </>

    </div>
  );
};
export default List;