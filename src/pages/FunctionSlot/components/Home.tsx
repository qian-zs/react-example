import { useEffect } from "react";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

const Home = (props: any) => {
  console.log(props);
  const { children, isShowTopBar, isShowBottomBar, title } = props;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      {isShowTopBar && <TopBar />}
      {/* 中间内容（slot） */}
      {children}
      {isShowBottomBar && <BottomBar />}
      <BottomBar />
    </div>
  );
};

export default Home;