import React from "react";
import TemperatureInput from './components/TemperatureInput';
import TemperatureShow from './components/TemperatureShow';

// 将组件接受的 props 和 state 的类型定位成 any
class ClassParams extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      temperature: '',
    };
  }

  // 父组件中的函数，接收一个参数
  handleTemp = (temperature: any) => {
    this.setState({
      temperature,
    });
  };

  render() {
    const { temperature } = this.state;
    return (
      <>
        父组件显示：{temperature}
        <TemperatureInput temperature={temperature} onTemperateChange={this.handleTemp} />
        <TemperatureShow temperature={parseFloat(temperature)} />
      </>
    );
  }
}
export default ClassParams;