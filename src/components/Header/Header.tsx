const Header = () => {
  const date = new Date().toDateString();
  return(
    <div>
      <h3>오늘은 </h3>
      <h1>{date}</h1>
    </div>
  );
};
export default Header;