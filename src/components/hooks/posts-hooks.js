import React, {useEffect} from "react"

const useJazzyNews = ()=>{
    const [_posts, setPosts] = useState([])
    const addPost = post => setPosts(allPosts => [post, ...allPosts]);

    const posts = useMemo(()=>_posts, [_posts]);    
    
    useEffect(()=>{
        newPostChime.play();        
    },[posts]);

    useEffect(()=>{
        newsFeed.suscribe(addPost);
        return () => newsFeed.unsuscribe(addPost);
    },[])

    useEffect(()=>{
        welcomeChime.play();
        return ()=> goodbyeChime.play();
    })

    return posts;
}