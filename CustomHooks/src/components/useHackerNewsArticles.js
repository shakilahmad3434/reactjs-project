import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';

function useHackerNewsArticles(nextScore) {
    const [stories, setStories] = useState([]);
    const { data, loading, error } = useFetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    useEffect(()=>{
        if(data && data.length > 0){
            const fetchStories = async () => {
                  try {
                       const selectedIds = data.slice(nextScore, nextScore + 10);
                       const top10Stories = selectedIds.map((item) => 
                        fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`).then((res) => res.json())
                       )
                       const resolvedStories = await Promise.all(top10Stories)
                       setStories(resolvedStories)
                  } catch (error) {
                      console.error(error)
                  }
              };
              fetchStories()
        }

    },[data, nextScore]);
    return {stories, loading, error}
}

export default useHackerNewsArticles