import { useState } from 'react';
import './App.css';
import Editor from './components/Editor/Editor';
import Header from './components/Header/Header';
import List from './components/List/List';

export interface Todo{
  id: number;
  todo: string;
  date: string;
  isChecked: boolean;
}
function App() {

  const [values, setValues] = useState<Todo[]>([]);

  const onUpdate = (targetId: number) => {
    setValues(
      values.map((value) => 
        value.id === targetId 
          ? {...value, isChecked: !value.isChecked}
          : value 
     )
    );
  };
  const onDelete = (targetId: number) => {
    setValues(values.filter((value) => value.id!== targetId));
  };

  return (
    <div className='Wrapper'>
      <Header />
      <Editor values={values} setValues={setValues}/>
      <List values={values} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}
export default App;
