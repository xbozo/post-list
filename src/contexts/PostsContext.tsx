import { Dispatch, ReactNode, createContext, useReducer, useState } from "react";

import { PostProps } from "@/@types/Post";
import { PostsReducer } from "@/reducers/PostsReducer";

type PostsContext = {
    posts: PostProps[]
    dispatch: Dispatch<any>
    editPostModal: boolean
    setEditPostModal: (modalState: boolean) => void
}

export const PostsContext = createContext<PostsContext | null>(null)


type Props = { children: ReactNode }
export function PostsProvider({ children }: Props) {
    const [editPostModal, setEditPostModal] = useState(false);
    const [posts, dispatch] = useReducer(PostsReducer, []);

    
    return (
        <PostsContext.Provider value={{ posts, dispatch, editPostModal, setEditPostModal }}>
            {children}
        </PostsContext.Provider>
    )
}

