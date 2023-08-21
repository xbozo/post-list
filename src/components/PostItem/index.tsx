import { PostsContext } from "@/contexts/PostsContext";
import { useContext } from "react";
import { EditPostModal } from "../EditPostModal";

type PostItemProps = {
    postId: number;
    postTitle: string;
    postBody: string;
};

export function PostItem({ postId, postTitle, postBody }: PostItemProps) {
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
                <div className="flex justify-between gap-6 border-b pb-2 text-gray-200 font-bold">
                    <h1 className="text-2xl text-gray-200 font-bold overflow-hidden whitespace-nowrap text-ellipsis">{postTitle}</h1>
                    <div className="flex gap-3 max-h-10">
                        <button 
                            className="py-2 px-4 rounded ease-in-out duration-200 bg-orange-500 hover:bg-orange-600"
                            onClick={handleEditPostModal}
                        >
                            Editar
                        </button>
                        <button 
                            className="py-2 px-4 rounded ease-in-out duration-200 bg-red-500 hover:bg-red-600"
                            onClick={() => handleRemovePost(postId)}
                        >
                            Remover
                        </button>
                    </div>
                </div>

                <p className="text-gray-200 mt-4 break-words">{postBody}</p>
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
