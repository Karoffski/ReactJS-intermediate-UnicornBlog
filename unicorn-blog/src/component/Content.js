import React from "react";
import useFetch from "react-fetch-hook";

export const Content = () => {

  const { isLoading, data } = useFetch("https://jsonplaceholder.typicode.com/posts")

    return isLoading ? (
       <div>Loading...</div>
    ) : (
      <div>
        {data.map((article) => {
                return (
                  <div>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                  </div>    
                )
              }
            )}
      </div>
    )    
}