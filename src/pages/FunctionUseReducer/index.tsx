import { useReducer } from 'react';

// type storeState = {
//   id?: number;
//   name?: string;
// }[];

interface storeState {
  id?: number;
  name?: string;
}

type storeAction =
  | { type: 'add'; payload: { id: number; name: string; }; }
  | { type: 'remove'; payload: { id: number; }; }
  | { type: 'update'; payload: { id: number; }; }
  | { type: 'clear'; };

const initialState = [
  { id: 1, name: '张三' },
  { id: 2, name: '李四' },
];

// FIXME:type 后面可以加[]例如：state: storeState，interface需要在定义处加[]例如：state: storeState[]
const reducer = (state: storeState[], action: storeAction) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter(item => item.id !== action.payload.id);
    case "update":
      return state.map(item => item.id === action.payload.id ? { ...item, ...action.payload } : item);
    case "clear":
      return [];
    default:
      throw new Error();
  }
};

const FunctionUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      List:{JSON.stringify(state)}
      <button onClick={() => dispatch({ type: "add", payload: { id: 3, name: "周五" } })}>add</button>
      <button onClick={() => dispatch({ type: "remove", payload: { id: 1 } })}>update</button>
      <button onClick={() => dispatch({ type: "clear" })}>clear</button>
    </>
  );
};
export default FunctionUseReducer;