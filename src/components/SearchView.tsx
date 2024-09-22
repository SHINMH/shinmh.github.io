'use client'
import React, { useState } from 'react'
import PostCard from './post/PostCard'

export default function SearchView(props: { postMetadata: any }) {
    const { postMetadata } = props
    const [searchValue, setSearchValue] = useState('')

    return (
        <>
            <div className="postsContainer">
                {postMetadata.filter((val: { title: string | string[] }) => {
                    return val.title.includes(searchValue)
                }).map((post: any, postIndex: any) => {
                    return (
                        <PostCard key={postIndex} post={post} />
                    )
                })}
            </div>
        </>
    )
}
