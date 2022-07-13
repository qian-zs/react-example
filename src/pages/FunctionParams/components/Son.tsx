const Son = ({ setCount }) => {

  const handleClick = () => {
    setCount(count => count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>点击+1</button>
    </>
  );
};

export default Son;