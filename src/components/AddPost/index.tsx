import { PostsContext } from "@/contexts/PostsContext"
import { useContext, useState } from "react"

export function AddPost() {
    const postsContext = useContext(PostsContext)

    const [titleInput, setTitleInput] = useState('')
    const [bodyInput, setBodyInput] = useState('')


    function handleAddPost(title: string, body: string) {
        if (postsContext) {
            if (title && body !== '') {
                postsContext.dispatch({
                    type: 'addPost',
                    payload: {
                        title,
                        body,
                    }
                })
                setTitleInput('')
                setBodyInput('')
            } else {
                alert('Preencha todos os campos.')
            }
        }
    }

    return (
        <div className="flex gap-4 justify-center mb-12">
            <div className="border-2 border-dashed border-gray-500 flex flex-col gap-3 p-5 max-w-5xl w-full">
                <input 
                    type="text" 
                    placeholder="Título do Post"
                    value={titleInput}
                    onChange={e => setTitleInput(e.target.value)}
                    className="h-8 px-2 text-black"
                />
                <textarea 
                    placeholder="Conteúdo do Post"
                    value={bodyInput}
                    onChange={e => setBodyInput(e.target.value)}
                    className="h-32 px-2 text-black resize-none"
                />
                <button
                    onClick={() => handleAddPost(titleInput, bodyInput)}
                    className="bg-blue-500 rounded py-2 ease-in-out duration-200 hover:bg-blue-600"
                >
                    Adicionar Post
                </button>
            </div>
        </div>
    )
}