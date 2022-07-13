import { useState } from "react";
import Son from './components/Son';

const Father = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>计数值：{count}</div>
      <Son setCount={setCount} />
    </>
  );
};

export default Father;