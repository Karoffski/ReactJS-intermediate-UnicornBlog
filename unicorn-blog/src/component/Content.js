import React from "react";
import useFetch from "react-fetch-hook";
import { Link} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

export const Content = () => {

const { isLoading, data } = useFetch("https://jsonplaceholder.typicode.com/posts")

    return isLoading ? (
       <CircularProgress className="loader"/>
    ) : (
      <div>
        <h3>{localStorage.getItem('Title')}</h3>
        <p>{localStorage.getItem('Text')}</p>
        {data.map((article) => {
                return (
                  <div className="content">
                    <h3>{article.title}</h3>
                    <p>{article.body.slice(0,200)}...<Link to={`articles/${article.id}`}>Show more</Link></p>
                  </div>    
                )
              }
            )}
      </div>
      )     
}