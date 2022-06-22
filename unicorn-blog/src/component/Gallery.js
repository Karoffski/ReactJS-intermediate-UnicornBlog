import React from "react";
import useFetch from "react-fetch-hook";

export const Gallery = () => {

const { isLoading, data } = useFetch("https://jsonplaceholder.typicode.com/photos")

    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <div>
        {data.map((picture) => {
                return (
                    <img src={picture.thumbnailUrl} alt={picture.title}/>    
                )
            }
        )}
        </div>
    )
}