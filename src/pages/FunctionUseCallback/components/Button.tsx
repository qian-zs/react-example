import React from "react";

type ButtonProps = {
  onClickButton?: React.MouseEventHandler<HTMLButtonElement>;
  children?: string;
};

const Button: React.FC<ButtonProps> = ({ onClickButton, children }) => {
  return (
    <>
      <button onClick={onClickButton}>{children}</button>
      <span>{Math.random()}</span>
    </>
  );
};

export default React.memo(Button);