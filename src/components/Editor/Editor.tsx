import './Editor.css';
import type { Todo } from '../../App';
import { useRef, useState } from 'react';

interface EditorProps {
  values: Todo[];
  setValues: (value: Todo[]) => void;
}

const Editor = ({values, setValues}: EditorProps) => {
  const [input, setInput] = useState<string>('');
  const ref = useRef(0);

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

    ref.current = ref.current + 1;
    const newTodo: Todo = {
      id: ref.current,
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