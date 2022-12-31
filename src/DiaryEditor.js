import { useState } from "react";

const DiaryEditor = () => {

    const [state, setState] = useState({
        author: "",
        content: "",
    });

    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input
                    name="author"
                    value={author} 
                    onChange={(e)=>{
                        setState({
                            author:e.target.value,
                            content: state.content,
                        });
                    }}
                />
            </div>
            <div>
                <textarea
                    value={content} 
                    onChange={(e)=>{
                        setState({
                            author:e.target.value,
                            content: state.author,
                        });
                    }} 
                />
            </div>
        </div>
    );
};

export default DiaryEditor;