import React from "react";
import useFetch from "react-fetch-hook";
import Linear from "./Linear";
import Box from '@mui/material/Box';

export const Gallery = () => {

    const { isLoading, data } = useFetch("https://jsonplaceholder.typicode.com/photos")

    return isLoading ? (
        <Box sx={{ width: '100%' }}>
            <Linear />
        </Box>
    ) : (
        <div className="gallery">
            {data.map((picture) => {
                return (
                    <img className="image" src={picture.url} alt={picture.title} />
                )
            }
            )}
        </div>
    )
}