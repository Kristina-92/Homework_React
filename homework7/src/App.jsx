import React, { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import { Posts } from "./components/Posts";
import { Todos } from "./components/Todos";
import { Navigation } from "./components/Navigation";

export function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getPosts();
    }, 1000);
  }, []);

  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((err) => alert(err));
  }

  return (
    <div id="app">
      <h1>App</h1>
      <Navigation />
      <Routes>
        <Route path="/posts" element={<Posts listOfPosts={posts} />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}
