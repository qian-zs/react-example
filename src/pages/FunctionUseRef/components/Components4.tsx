import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import type { InputRef } from 'antd';

type ChildProps = {
  ref?: any;
};

const Index: React.FC<ChildProps> = () => {
  const inputEl = useRef<InputRef | null>(null);

  useEffect(() => {
    console.log(inputEl?.current?.someValue);
  }, []);

  return (
    <>
      <Child ref={inputEl} />
      <button onClick={() => inputEl?.current?.setValue((val: number) => val + 1)}>
        累加子组件的value
      </button>
    </>
  );
};

const Child: React.FC<ChildProps> = forwardRef((props, ref) => {
  const inputRef = useRef<InputRef | null>(null);
  const [value, setValue] = useState(0);

  useImperativeHandle(ref, () => ({
    setValue,
    someValue: "test",
  }));

  return (
    <>
      <div>child-value: {value}</div>
      <input ref={inputRef} />
    </>
  );
});

const Components4 = () => {
  return (
    <>
      <Index />
    </>
  );
};
export default Components4;