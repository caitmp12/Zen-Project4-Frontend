import React from "react"

const Home = (props) => {

    const { posts } = props

    console.log({posts})

    return (
        <div>
        <h1>Today's Posts</h1>
        <div>
            {posts.map((post) => (
                <>
                    <h2>{post.title}</h2>
                    <h4>{post.genre}</h4>
                    <p>{post.blurb}</p>
                    <ul>
                    <li>{post.username}</li>
                    <li>{post.contact}</li>
                    </ul>
                    
                </>
            ))}
        </div>
        </div>    
    )
}

export default Home; 