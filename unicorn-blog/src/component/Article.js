import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "react-fetch-hook";
import CircularProgress from '@mui/material/CircularProgress';

export const Article = () => {

    let params = useParams();
    const { isLoading, data } = useFetch("https://jsonplaceholder.typicode.com/posts/"+params.articleId)
    

    return isLoading ? (
        <CircularProgress className="loader"/>
     ) : (
        <div className="article">
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <h1>Comments</h1>
        </div>
       )   
}