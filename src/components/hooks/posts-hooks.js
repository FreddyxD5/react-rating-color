import React, {useEffect} from "react"

const useJazzyNews = ()=>{
    const [posts, setPosts] = useState([])
    const addPost = post => setPosts(allPosts => [post, ...allPosts]);

    useEffect(()=>{
        newsFeed.suscribe(addPost);
        return () => newsFeed.unsuscribe(addPost);
    },[])

    useEffect(()=>{
        welcomeChime.play();
        return ()=> goodbyeChime.play();
    })

    return posts
}