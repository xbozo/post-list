import { PostsContext } from "@/contexts/PostsContext"
import { useContext } from "react"

export function Header() {
    const postsContext = useContext(PostsContext)

    return (
        <h1 className="text-2xl text-center mb-12">Total de posts: {postsContext?.posts.length}</h1>
    )    
}