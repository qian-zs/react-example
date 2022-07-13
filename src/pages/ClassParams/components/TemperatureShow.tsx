import React from "react";

// 将子组件接受的 props 和 state 的类型定位成 any
class TemperatureShow extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { temperature } = this.props;

    if (temperature > 38) {
      return <p>温度：<span style={{ color: '#f50', fontSize: '18px' }}>🔥热</span></p>;
    } else if (temperature <= 38 && temperature >= 0) {
      return <p>稳定：<span style={{ color: '#0098f4' }}>正合适</span></p>;
    } else {
      return <p>温度：<span style={{ color: '#333' }}>🧊冷</span></p>;
    }
  }
}

export default TemperatureShow;