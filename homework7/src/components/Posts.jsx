import React from "react";

export const Posts = ({ listOfPosts }) => {
  return (
    <div id="posts">
      <h1>Posts</h1>
      {listOfPosts.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>UserID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {listOfPosts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2>...Loading posts</h2>
      )}
    </div>
  );
};
