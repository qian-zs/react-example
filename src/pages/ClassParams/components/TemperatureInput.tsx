import React from "react";

// 将子组件接受的 props 和 state 的类型定位成 any
class TemperatureInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  handleTemp = (e: any) => {
    // 接收父组件传递过来的函数，调用并传值给父组件
    this.props.onTemperateChange(e.target.value);
  };

  render() {
    const { temperature } = this.props;
    return (
      <>
        <p>
          <label htmlFor="tempInput">请输入天气温度：</label>
          {/* onChange 事件调用函数 */}
          <input className="tem-input" type="text" name="tempInput" value={temperature} onChange={this.handleTemp} />
        </p>
      </>
    );
  }
}

export default TemperatureInput;