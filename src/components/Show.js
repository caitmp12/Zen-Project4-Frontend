import React from "react"
import { Route, Link, Switch } from "react-router-dom"

const Show = (props) => {

    const { post } = props

    return (
        <div>
            <div>
            <h2>{post.title}</h2>
            <h4>{post.genre}</h4>
            <p>{post.blurb}</p>
            <ul>
                <li>{post.username}</li>
                <li>{post.contact}</li>
            </ul>
            </div>
            <div>
                <button
                onClick={() => {
                    props.selectPost(post)
                    props.history.push(`/posts/edit`)
                }}>Edit</button>
                <button
                onClick={() => {
                    props.deletePost(post)
                    props.history.push(`/`)
                }}>Delete</button>
            </div>
        </div>
    )
}

export default Show; 