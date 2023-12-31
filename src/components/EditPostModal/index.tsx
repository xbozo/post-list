import { Post } from "@/@types/Post";
import { PostsContext } from "@/contexts/PostsContext";
import { useContext, useEffect, useState } from "react";


export function EditPostModal({ postId, postTitle, postBody }: Post) {
    const [editedTitleText, setEditedTitleText] = useState(postTitle);
    const [editedBodyText, setEditedBodyText] = useState(postBody);

    const postsContext = useContext(PostsContext);

    useEffect(() => {
        setEditedTitleText('');
        setEditedBodyText('');
    }, [])

    function handleSaveChanges() {
        if (editedBodyText.trim() === '' || editedTitleText.trim() === '') {
            alert('Preencha todos os campos.');
        } else {
            postsContext?.dispatch({
                type: 'editPostText',
                payload: {
                    newTitle: editedTitleText,
                    newBody: editedBodyText,
                    id: postId,
                }
            });
            postsContext?.setEditPostModal(false);
        }
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center">
            <div className="container bg-transparent max-w-4xl w-full max-h-full h-full p-7 overflow-hidden text-center flex flex-col gap-3 justify-center sm:p-28">
                <div>
                    <input 
                        value={editedTitleText}
                        onChange={(e) => setEditedTitleText(e.target.value)}
                        placeholder="Digite o novo título"
                        className="p-2 max-h-[350px] h-full text-black resize-none w-full focus:outline-none rounded"
                    />
                </div>
                <textarea
                    value={editedBodyText}
                    onChange={(e) => setEditedBodyText(e.target.value)}
                    placeholder="Digite o novo texto"
                    className="p-2 max-h-[350px] h-full w-full text-black resize-none focus:outline-none rounded"
                />
                <div className="container flex flex-col w-full gap-3 sm:flex-row">
                    <button 
                        onClick={() => postsContext?.setEditPostModal(false)}
                        className="py-2 px-4 bg-red-500 rounded border-0 flex-1 ease-in-out duration-200 hover:bg-red-600"
                    >
                        Fechar
                    </button>
                    <button 
                        onClick={handleSaveChanges}
                        className="py-2 px-4 bg-green-500 rounded border-0 flex-1 ease-in-out duration-200 hover:bg-green-600"
                    >
                        Salvar Alterações
                    </button>
                </div>
            </div>
        </div>
    )
}
