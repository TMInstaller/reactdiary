import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id:1,
//     author:"백동열",
//     content:"안녕하세요 1",
//     emotion:"5",
//     created_date: new Date().getTime(),
//   },
//   {
//     id:2,
//     author:"백동열2",
//     content:"안녕하세요 2",
//     emotion:"4",
//     created_date: new Date().getTime(),
//   },
//   {
//     id:3,
//     author:"백동열3",
//     content:"안녕하세요 3",
//     emotion:"3",
//     created_date: new Date().getTime(),
//   }
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
