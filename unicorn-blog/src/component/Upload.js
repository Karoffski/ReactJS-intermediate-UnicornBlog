import React, { useState } from "react";

export const Upload = () => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handle = () => {
        localStorage.setItem('Title', title);
        localStorage.setItem('Text', text);
    };

    
       const x = localStorage.getItem('Title');
       const y = localStorage.getItem('Text');

    return (
        <form className="upload">
            <div className="title">
                <label for="title">Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className="titleInput" type="text" name="title"/>
            </div><br></br>
            <div className="input">
                <input value={text} onChange={(e) => setText(e.target.value)} className="inputText" placeholder="My article here..." type="text" />
                <button onClick={handle} className="submit">Post</button>
                <p>{x}</p>
                <p>{y}</p>
            </div>
        </form>
    )
}