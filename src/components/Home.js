import React from "react"
import { Link } from "react-router-dom"

const Home = (props) => {

    const { posts } = props

    console.log({posts})

    return (
        <div>
        <h1 id="today">Today's Posts</h1>
        <div>
            {posts.map((post) => (
                <div>
                    <div class="posts">
                    <h2 id="text"
                    onClick={() => {
                        props.selectPost(post)
                        props.history.push(`/posts/${post.id}`)}}>
                    {post.title}</h2>
                    <h4 id="text">{post.genre}</h4>
                    <p id="text">About: {post.blurb}</p>
                    <ul>
                    <li id="nav">username: {post.username}</li>
                    <li id="nav">contact at: {post.contact}</li>
                    </ul>
                    </div>
                </div>
            ))}
        <br/>    
        </div>
        <footer class="create">
            <Link to={"/posts/new"}><button>Post Your WIP</button></Link>
        </footer>
        </div>    
    )
}

export default Home; 