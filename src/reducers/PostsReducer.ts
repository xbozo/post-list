import { PostProps } from "@/@types/Post";

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

    
export function PostsReducer(posts: PostProps[], action: PostActions) {
    switch(action.type) {
        case 'addPost':
            return [...posts, {
                id: posts.length,
                title: action.payload.title,
                body: action.payload.body,
            }]

        case 'removePost':
            return posts.filter((post) => post.id !== action.payload.id)
        
        case 'editPostText':
            return posts.map(post => {
                if (post.id === action.payload.id) {
                    post.title = action.payload.newTitle
                    post.body = action.payload.newBody
                }
                return post
            })
        default:
            return posts
    }
}