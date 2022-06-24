import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "react-fetch-hook";
import Linear from "./Linear";
import Box from '@mui/material/Box';

export const Article = () => {

    let params = useParams();
    const { isLoading, data } = useFetch("https://jsonplaceholder.typicode.com/posts/" + params.articleId)


    return isLoading ? (
        <Box sx={{ width: '100%' }}>
            <Linear />
        </Box>
    ) : (
        <div className="article">
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <h1>Comments</h1>
            <h3>Utilisateur numéro: {data.id}</h3>
            <p>Mon opinion est importante</p>
            <h3>Utilisateur numéro: {data.id + 1}</h3>
            <p>Mon opinion est importante également</p>
        </div>
    )
}