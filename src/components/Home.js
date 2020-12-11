import React from "react"
import { Link } from "react-router-dom"

const Home = (props) => {

    const { posts } = props

    console.log({posts})

    return (
        <div>
        <h1>Today's Posts</h1>
        <div>
            {posts.map((post) => (
                <>
                    <h2
                    onClick={() => {
                        props.selectPost(post)
                        props.history.push(`/posts/${post._id}`)}}>
                    {post.title}</h2>
                    <h4>{post.genre}</h4>
                    <p>{post.blurb}</p>
                    <ul>
                    <li>{post.username}</li>
                    <li>{post.contact}</li>
                    </ul>
                    
                </>
            ))}
        </div>
        <footer>
            <Link to={"/posts/new"}><button>Post Your WIP</button></Link>
        </footer>
        </div>    
    )
}

export default Home; 