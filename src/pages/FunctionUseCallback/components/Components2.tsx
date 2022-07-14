import { useRef, useState, useCallback } from 'react';

type OtherFormProps = {
  onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
};

const Components2 = () => {
  const textRef = useRef('');
  const [text, setText] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(textRef.current);
  }, [textRef]);

  return (
    <form>
      <input value={text} onChange={(e) => {
        const { value } = e.target;
        setText(value);
        textRef.current = value;
      }} />
      <OtherForm onSubmit={handleSubmit} />
    </form>
  );
};

const OtherForm: React.FC<OtherFormProps> = ({ onSubmit }) => {
  return (
    <button onClick={onSubmit}>Submit</button>
  );
};

export default Components2;