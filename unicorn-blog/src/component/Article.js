import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "react-fetch-hook";
import Linear from "./Linear";
import Box from '@mui/material/Box';

export function Article() {

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
            <div className="comments">
                <h1>Comments</h1>
                <div className="firstComment">
                    <h3>Utilisateur numéro: {data.id}</h3>
                    <p>Mon opinion est importante</p>
                </div>
                <div className="secondComment">
                    <h3>Utilisateur numéro: {data.id + 1}</h3>
                    <p>Mon opinion est importante également</p>
                </div>
            </div>
        </div>
    )
}