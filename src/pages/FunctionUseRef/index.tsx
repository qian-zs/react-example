import { Divider } from "antd";
import Components1 from "./components/Components1";
import Components2 from "./components/Components2";
import Components3 from "./components/Components3";
import Components4 from "./components/Components4";
import Components5 from "./components/Components5";
import Components6 from "../FunctionUseMemo";

const FunctionUseRef = () => {
  return (
    <>
      <Divider>例子1</Divider>
      <Components1></Components1>
      <Divider>例子2</Divider>
      <Components2></Components2>
      <Divider>例子3</Divider>
      <Components3></Components3>
      <Divider>例子4</Divider>
      <Components4></Components4>
      <Divider>例子5</Divider>
      <Components5></Components5>
      <Divider>例子6</Divider>
      <Components6></Components6>
    </>
  );
};
export default FunctionUseRef;