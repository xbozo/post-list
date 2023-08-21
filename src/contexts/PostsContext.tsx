import { Dispatch, ReactNode, createContext, useEffect, useReducer, useState } from "react";

import { Post } from "@/@types/Post";
import { PostsReducer } from "@/reducers/PostsReducer";

type PostsContext = {
    posts: Post[]
    dispatch: Dispatch<any>
    editPostModal: boolean
    setEditPostModal: (modalState: boolean) => void
}

export const PostsContext = createContext<PostsContext | null>(null)

const STORAGE_KEY = 'postContextContent'

type Props = { children: ReactNode }
export function PostsProvider({ children }: Props) {
    const [editPostModal, setEditPostModal] = useState(false);
    const [posts, dispatch] = useReducer(
        PostsReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')       // para a execução se a primeira condição for satisfeita. [] = valor inicial
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
    }, [posts])

    
    return (
        <PostsContext.Provider value={{ posts, dispatch, editPostModal, setEditPostModal }}>
            {children}
        </PostsContext.Provider>
    )
}

