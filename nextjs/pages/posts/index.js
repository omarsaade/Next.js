import React from 'react'
import Link from "next/link";

function Posts(props) {
    return (
        <div>
            Posts Component (the index)
            {props.posts.map(post => (
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Posts


export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();
    return {
        props: {
            posts: data
        }
    }

}