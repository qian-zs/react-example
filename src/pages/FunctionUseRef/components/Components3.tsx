import React, { forwardRef, useRef } from "react";

type ChildProps = {
  ref?: any;
};

const Components3 = () => {
  return (
    <>
      <Index />
    </>
  );
};

const Index = () => {
  const inputEl = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    inputEl?.current?.focus();
  };

  return (
    <>
      <Child ref={inputEl} />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
};

const Child: React.FC<ChildProps> = forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} />;
});


export default Components3;