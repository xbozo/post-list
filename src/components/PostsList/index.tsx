import { PostsContext } from "@/contexts/PostsContext"
import { useContext } from "react"
import { PostItem } from "../PostItem"

export function PostsList() {
    const postsContext = useContext(PostsContext)
    
    return (
        <div>
            {postsContext?.posts.map((post) => (
                <PostItem 
                    key={post.id}
                    postId={post.id}
                    postTitle={post.title}
                    postBody={post.body}
                />
            ))}
        </div>
    )
}