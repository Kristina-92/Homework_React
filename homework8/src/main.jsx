import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import { App } from "./App";
import { Comments } from "./components/Comments";
import { Routes, Route } from "react-router";
import { CommentDetails } from "./components/CommentDetails";
import { CommentsByPostId } from "./components/CommentsByPostId";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/comments" element={<Comments />} />
        <Route path="/comment/:commentId" element={<CommentDetails />} />
        <Route path="comments/search" element={<CommentsByPostId />} />
      </Route>
    </Routes>
  </Router>
);
