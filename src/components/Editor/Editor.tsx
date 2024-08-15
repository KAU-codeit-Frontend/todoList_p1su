import './Editor.css';

const Editor = () => {
  return(
    <div className='editor-wrapper'>
      <form className='form'>
        <input className='input' placeholder='새로운 Todo...' />
        <button className='button' type='submit'>
          추가
        </button>
      </form>
    </div>
  );
};
export default Editor;