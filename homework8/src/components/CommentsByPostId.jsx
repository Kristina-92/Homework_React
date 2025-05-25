import React, { useState } from "react";
import axios from "axios";

export const CommentsByPostId = () => {
  const [postId, setPostId] = useState(""); // da go zememe id-to na commentarot koj e pritisnat
  const [comments, setComments] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function searchComments() {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      setComments(res.data);
    } catch (err) {
      setError("Error loading comments");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div id="comments-byPostId">
      <h2>Search Comments by Post ID</h2>

      <input
        type="number"
        value={postId}
        placeholder="Enter post ID"
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={searchComments} disabled={loading}>
        {loading ? "Searching" : "Search"}
      </button>
      {error && <p>{error}</p>}

      {comments && comments.length > 0 && (
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
              <th>PostID</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body.substring(0, 100)}...</td>
                <td>{comment.postId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {comments && comments.length === 0 && !loading && postId && (
        <p>No comments found for the postId {postId}</p>
      )}
    </div>
  );
};
