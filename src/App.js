import React from "react";
import { Route, Link, Switch } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import New from "./components/New"
import Show from "./components/Show"

function App() {
  const baseURL = "https://cp-match-backendp4.herokuapp.com";

  const emptyPost = {
    title: "",
    blurb: "",
    genre: "",
    username: "",
    contact: ""
  }

  const [posts, setPosts] = React.useState([])

  //Fetch function
  const getPosts = () => {
    fetch(`${baseURL}/posts`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPosts(data)
      })
  }

  //Use Effect Function
  React.useEffect(() => {
    getPosts()
  }, [])

  const [selectedPost, setSelectedPost] = React.useState(emptyPost)

  const selectPost = (posts) => {
    setSelectedPost(posts)
  }

  //Create+New function
  const handleCreate = (newPost) => {
    console.log("handleCreate running")
    fetch(`${baseURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).then((response) => {
      getPosts()
    })
  }

  //Edit function
  const handleUpdate = (post) => {
    fetch(`${baseURL}/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((response) => {
      getPosts()
    })
  }

  //Delete function
  const deletePost = (post) => {
    fetch(`${baseURL}/posts/${post.id}`, {
      method: "DELETE",
    }).then((response) => 
      getPosts()
    )
  }


  return (
    <>
      <div class="header">
      <br/>  
      <h1 class="title">CP Match</h1>
      <ul>
        <Link to={"/home"}><li id="nav">Home</li></Link>
        <Link to={"/posts/new"}><li id="nav">Post your WIP</li></Link>
        <Link to={"/home"}><li id="nav">Critique a WIP</li></Link>
        <Link to={"/home"}><li id="nav">Sensitivity Readers</li></Link>
        <Link to={"/home"}><li id="nav">SignUp/SignIn</li></Link>
      </ul>
      <br/>
      </div>
      <main>
        <Switch>
          <Route 
            exact
            path="/home"
            render={(rp) => (
              <Home {...rp} posts={posts} selectPost={selectPost} />
            )}
          />  
          <Route exact 
          path="/posts/new"
          render={(rp) => (
            <New {...rp} label="create" post={posts} selectPost={selectPost} empty={emptyPost} handleSubmit={handleCreate} />
          )}
          />
          <Route
            exact
            path="/posts/edit"
            render={(rp) => (
              <New {...rp} label="update" post={selectedPost} handleSubmit={handleUpdate} />
            )}
          />
          <Route
            exact
            path="/posts/:id"
            render={(rp) => (
              <Show {...rp} post={selectedPost} selectPost={selectPost} deletePost={deletePost} posts={posts}
              />
            )}
          />
        </Switch>
      </main>
    </>
  );
}

export default App;
