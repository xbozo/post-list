import { PostsContext } from "@/contexts/PostsContext"
import { useContext } from "react"
import { PostItem } from "../PostItem"

export function PostsList() {
    const postsContext = useContext(PostsContext)
    
    return (
        <div>
            {postsContext?.posts.map((post) => (
                <PostItem 
                    key={post.postId}
                    postId={post.postId}
                    postTitle={post.postTitle}
                    postBody={post.postBody}
                />
            ))}
        </div>
    )
}