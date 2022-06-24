import React, { useState } from "react";
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

export function Upload() {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const createItem = () => {
        localStorage.setItem('Title', title);
        localStorage.setItem('Text', text);
    };

    const deleteItem = () => {
        localStorage.removeItem('Title', title);
        localStorage.removeItem('Text', text);
    };

    return (
        <form className="upload">
            <div className="title">
                <label for="title">Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className="titleInput" type="text" name="title" />
            </div><br></br>
            <div className="input">
                <input value={text} onChange={(e) => setText(e.target.value)} className="inputText" placeholder="My article here..." type="text" />
                <Box sx={{ width: '100%' }}>
                <Chip sx={{margin: 3}} label="Post" onClick={createItem} />
                <Chip sx={{margin: 3}} label="Delete" onClick={deleteItem} />
                </Box>
            </div>
        </form>
    )
}