import React, { useEffect } from "react";

type FunctionComponentProps = {};

const FunctionComponent: React.FC<FunctionComponentProps> = (props) => {
  console.log(props);
  useEffect(() => {
    console.log('页面加载');
  }, []);

  return (<>FunctionComponent</>);
};

export default FunctionComponent;