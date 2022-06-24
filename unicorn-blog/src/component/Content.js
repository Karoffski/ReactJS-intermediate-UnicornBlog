import React from "react";
import useFetch from "react-fetch-hook";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import Linear from "./Linear";
import Box from '@mui/material/Box';

export function Content() {

  const { isLoading, data } = useFetch("https://jsonplaceholder.typicode.com/posts")

  return isLoading ? (
    <Box sx={{ width: '100%' }}>
    <Linear />
    </Box>
  ) : (
    <div>
      <div className="content">
        <h3>{localStorage.getItem('Title')}</h3>
        <p>{localStorage.getItem('Text')}</p>
      </div>
      {data.map((article) => {
        return (
          <Stack spacing={2}>
          <div className="content">
            <h3>{article.title}</h3>
            <p>{article.body.slice(0, 200)}...<Link to={`articles/${article.id}`}><Button href="#text-buttons">Show more</Button></Link></p>
          </div>
          </Stack>
        )
      }
      )}
    </div>
  )
}