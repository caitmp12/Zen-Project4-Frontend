import React from "react";
import { Route, Link, Switch } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"

function App() {
  const baseURL = "http://localhost:3000";

  const emptyPost = {
    title: "",
    blurb: "",
    genre: "",
    username: "",
    contact: ""
  }

  const [posts, setPosts] = React.useState([])

  const getPosts = () => {
    fetch(`${baseURL}/posts`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPosts(data)
      })
  }


  React.useEffect(() => {
    getPosts()
  }, [])

  const [selectedPost, setSelectedPost] = React.useState(emptyPost)

  const selectPost = (posts) => {
    setSelectedPost(posts)
  }

  return (
    <>
      <h1>CP Match</h1>
      <ul>
        <li>Home</li>
        <li>Post your WIP</li>
        <li>Critique a WIP</li>
        <li>Sensitivity Readers</li>
        <li>SignUp/SignIn</li>
      </ul>
      <main>
        <Switch>
          <Route 
            exact
            path="/"
            render={(rp) => (
              <Home {...rp} posts={posts} selectPost={selectPost} />
            )}
          />  
        </Switch>
      </main>
    </>
  );
}

export default App;
