import Home from "./Home";

const Layout = (props: any) => {
  return (
    <Home isShowTopBar={false} isShowBottomBar={true} title="react实现slot">
      {/* 首页内容主体（slot） */}
      <div>
        <h1>使用组合的方式实现slot</h1>
        <p>滴答滴答滴答~~~~~~~~~</p>
      </div>
    </Home>
  );
};

export default Layout;