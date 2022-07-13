import ShowArea from './components/ShowArea';
import Buttons from './components/Buttons';
import { Color } from './components/color';

const FunctionParams = () => {

  return (
    <>
      <div className="App">
        <Color>
          <ShowArea />
          <Buttons />
        </Color>
      </div>
    </>
  );
};

export default FunctionParams;