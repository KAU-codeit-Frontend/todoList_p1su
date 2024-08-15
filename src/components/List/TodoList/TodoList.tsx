import './TodoList.css';

const TodoList = () => {
  return(
    <div className='todo-wrapper'>
      <form className='todo-form'>
        <input className='checkbox' type='checkbox'/>
        <p className='todo'>Todo...</p>
        <section className='right-section'>
          <p>Date</p>
          <button type='submit'>
            삭제
          </button>
        </section>
      </form>
    </div>
  );
};
export default TodoList;