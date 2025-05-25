import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

export const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setComments(res.data))
      .catch((err) => alert(err.message));
  }, []);

  async function deleteItem(id) {
    const deletedItem = await axios.delete(
      "https://jsonplaceholder.typicode.com/comments/" + id
    );
    alert(deletedItem.status);
    setComments([...comments.filter((comm) => comm.id !== id)]);
  }

  return (
    <div id="comments">
      <h2>Comments</h2>
      <Link to="/comments/search">
        <button>Search Comments By Post Id</button>
      </Link>
      <table border={1}>
        <thead>
          <tr>
            <th>PostId</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => {
            return (
              <tr key={comment.id}>
                <td>{comment.postId}</td>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>
                  {comment.body.substring(0, 100)}...
                  <Link to={`/comment/${comment.id}`}>More</Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteItem(comment.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
