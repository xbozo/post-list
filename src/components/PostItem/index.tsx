import { Post } from "@/@types/Post";

import { PostsContext } from "@/contexts/PostsContext";
import { useContext } from "react";

import { EditPostModal } from "../EditPostModal";


export function PostItem({ postId, postTitle, postBody }: Post) {
    const postsContext = useContext(PostsContext);

    function handleEditPostModal() {
        postsContext?.setEditPostModal(!postsContext?.editPostModal);
    }



    function handleRemovePost(postId: number) {
        postsContext?.dispatch({
            type: 'removePost',
            payload: {
                id: postId
            }
        });
    }

    return (
        <div>
            <div className="flex flex-col mx-auto border-2 border-gray-300/40 rounded mt-8 p-4 max-w-4xl w-full">
                <div className="flex flex-col justify-between gap-3 border-b pb-2 text-gray-200 font-bold sm:flex-row sm:gap-6">
                    <h1 className="text-xl text-gray-200 font-bold overflow-hidden whitespace-nowrap text-ellipsis sm:text-2xl">{postTitle}</h1>
                    <div className="flex gap-3 max-h-10">
                        <button 
                            className="py-1 px-3 rounded ease-in-out duration-200 bg-orange-500 hover:bg-orange-600 w-full"
                            onClick={handleEditPostModal}
                        >
                            Editar
                        </button>
                        <button 
                            className="py-1 px-3 rounded ease-in-out duration-200 bg-red-500 hover:bg-red-600 w-full"
                            onClick={() => handleRemovePost(postId)}
                        >
                            Remover
                        </button>
                    </div>
                </div>

                <p className="text-gray-200 mt-4 break-words text-md sm:text-lg">{postBody}</p>
            </div>

            {postsContext?.editPostModal && (
                <EditPostModal 
                    postTitle={postTitle}
                    postBody={postBody}
                    postId={postId}
                />
            )}

        </div>
    );
}
