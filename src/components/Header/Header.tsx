import './Header.css';

const Header = () => {
  const date = new Date().toDateString();
  return(
    <div className='header-wrapper'>
      <h3>오늘은 </h3>
      <h1 className='title'>{date}</h1>
    </div>
  );
};
export default Header;