import { FC } from 'react';

type Props = {
  setCount: any;
};

const Son: FC<Props> = ({ setCount }) => {

  const handleClick = () => {
    setCount((count: number) => count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>点击+1</button>
    </>
  );
};

export default Son;