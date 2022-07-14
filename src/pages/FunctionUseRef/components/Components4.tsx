import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

const Index = () => {
  const inputEl = useRef<any | null>(null);

  useEffect(() => {
    console.log(inputEl?.current?.someValue);
  }, []);

  return (
    <>
      <Child ref={inputEl} />
      {/* TODO:索引用 useReducer 替换 */}
      <button onClick={() => inputEl?.current?.setValue((val: number) => val + 1)}>
        累加子组件的value
      </button>
    </>
  );
};

const Child = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
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