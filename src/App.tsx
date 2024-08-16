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

  return (
    <div className='Wrapper'>
      <Header />
      <Editor values={values} setValues={setValues}/>
      <List values={values} />
    </div>
  );
}
export default App;
