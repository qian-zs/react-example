import { useRef } from 'react';

const Components1 = () => {
  const inputEl = useRef<HTMLInputElement | null>(null);

  const onButtonClick = () => {
    inputEl?.current?.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
};
export default Components1;