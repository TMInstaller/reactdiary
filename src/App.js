import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id:1,
    author:"백동열",
    content:"안녕하세요 1",
    emotion:"5",
    created_date: new Date().getTime(),
  },
  {
    id:2,
    author:"백동열2",
    content:"안녕하세요 2",
    emotion:"4",
    created_date: new Date().getTime(),
  },
  {
    id:3,
    author:"백동열3",
    content:"안녕하세요 3",
    emotion:"3",
    created_date: new Date().getTime(),
  }
]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
