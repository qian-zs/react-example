import React from 'react';

class ClassComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("页面加载");
  }

  render() {
    return (<>ClassComponent</>);
  }
}

export default ClassComponent;