import { useEffect, useLayoutEffect, useRef } from "react";
import './Components5.less';

const UseEffect = () => {
  const box = useRef();

  useEffect(() => {
    box.current.style.marginLeft = 100 + "px";
  }, []);

  return (
    <div className="box box1" ref={box}>
      useEffect
    </div>
  );
};

const UseLayoutEffect = () => {
  const box = useRef();
  useLayoutEffect(() => {
    box.current.style.marginLeft = 100 + "px";
  }, []);

  return (
    <div className="box box2" ref={box}>
      UseLayoutEffect
    </div>
  );
};

const Components5 = () => {
  return (
    <>
      <div className="App">
        <h1>刷新浏览器看下区别效果</h1>
        <UseEffect />
        <UseLayoutEffect />
      </div>
    </>
  );
};
export default Components5;