import './Editor.css';
import type { Todo } from '../../App';
import { useState } from 'react';

interface EditorProps {
  values: Todo[];
  setValues: (value: Todo[]) => void;
}

const Editor = ({values, setValues}: EditorProps) => {
  const [input, setInput] = useState<string>('');

  const formatDate = (): string => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${month}월 ${day}일`;
  } 

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      todo: input,
      date: formatDate(),
    };

    setValues([...values, newTodo]);
  };

  return(
    <div className='editor-wrapper'>
      <form 
        className='form'
        onSubmit={handleSubmit}  
      >
        <input 
          className='input' 
          placeholder='새로운 Todo...' 
          value={input}  
          onChange={handleInput}
        />
        <button 
          className='button' 
          type='submit'
        >
          추가
        </button>
      </form>
    </div>
  );
};
export default Editor;