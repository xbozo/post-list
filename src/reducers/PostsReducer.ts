import { Post } from "@/@types/Post";

type AddAction = {
    type: 'addPost';
    payload: {
        title: string
        body: string;
    };
}

type EditTextAction = {
    type: 'editPostText';
    payload: {
        newTitle: string;
        newBody: string;
        id: number;
    }
}

type RemoveAction = {
    type: 'removePost';
    payload: {
        id: number;
    }
}

type PostActions = 
    | AddAction
    | EditTextAction
    | RemoveAction

    
export function PostsReducer(posts: Post[], action: PostActions) {
    switch(action.type) {
        case 'addPost':
            return [...posts, {
                postId: posts.length,
                postTitle: action.payload.title,
                postBody: action.payload.body,
            }]

        case 'removePost':
            return posts.filter((post) => post.postId !== action.payload.id)
        
        case 'editPostText':
            return posts.map(post => {
                if (post.postId === action.payload.id) {
                    post.postTitle = action.payload.newTitle
                    post.postBody = action.payload.newBody
                }
                return post
            })
        default:
            return posts
    }
}