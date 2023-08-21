'use client'

import { AddPost } from "@/components/AddPost"
import { Header } from "@/components/Header"
import { PostsList } from "@/components/PostsList"
import { PostsProvider } from "@/contexts/PostsContext"

export default function Home() {
  return (
    <PostsProvider>
      <div className="container mt-10 mx-auto p-7">
        <Header />
        <AddPost />
        <PostsList />
      </div>
    </PostsProvider>
  )
}