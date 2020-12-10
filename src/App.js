import React from "react";
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"

function App() {
  const baseURL = "http://localhost:3000";

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

  return (
    <>
      <h1>CP Match</h1>
      <main>
        <Switch>
          <Route 
            exact
            path="/"
            render={(rp) => (
              <Home />
            )}
          />  
        </Switch>
      </main>
    </>
  );
}

export default App;
