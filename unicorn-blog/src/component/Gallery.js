import React from "react";
import useFetch from "react-fetch-hook";
import CircularProgress from '@mui/material/CircularProgress';

export const Gallery = () => {

const { isLoading, data } = useFetch("https://jsonplaceholder.typicode.com/photos")

    return isLoading ? (
        <CircularProgress />
    ) : (
        <div className="gallery">
        {data.map((picture) => {
            return (
                <img className="image" src={picture.url} alt={picture.title}/>    
            )
        }
    )}
        </div>
    )
}