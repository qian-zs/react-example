import { createContext, useReducer } from "react";

// 创建 context
export const ColorContext = createContext<{
  dispatch: any;
  color: any;
}>({} as any);

// reducer
export const UPDATE_COLOR = "UPDATE_COLOR";
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color;
    default:
      return state;
  }
};

// 创建一个 Color 组件，Color 组件包裹的所有子组件都可以通过调用 ColorContext 访问到 value
export const Color = (props: any) => {
  const [color, dispatch] = useReducer(reducer, 'blue');
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};