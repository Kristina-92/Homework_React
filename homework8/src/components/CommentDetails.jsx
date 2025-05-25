import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import "../css/CommentDetails.css";

export const CommentDetails = () => {
  let { commentId } = useParams(); // da go zememe id-to na commentarot koj e pritisnat
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const [detailsData, setDetailsData] = useState({
    name: "",
    email: "",
    body: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
      .then((res) => {
        setDetails(res.data);
        setDetailsData({
          name: res.data.name,
          email: res.data.email,
          body: res.data.body,
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(`Error fetching comment:${err.message}`);
      });
  }, [commentId]);

  async function handleEditSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/comments/${commentId}`,
        detailsData
      );
      if (res.status === 200) {
        console.log("Updated comment data,", detailsData);
        alert("Comment updated successfully!");
        navigate("/comments");
      } else {
        setError("Something went wrong. Please try again!");
      }
    } catch (err) {
      setError(`Failed to update comment: ${err.message}`);
    }
  }

  if (loading) return <div className="loader"></div>;

  return (
    <div id="comment-details">
      {!editMode ? (
        <>
          <h2>{details.name}</h2>
          <h3>{details.email}</h3>
          <p>{details.body}</p>
          <button
            type="button"
            onClick={() => {
              setEditMode(true);
            }}
          >
            Edit Comment
          </button>
        </>
      ) : (
        <form onSubmit={handleEditSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={detailsData.name}
              onChange={(e) => {
                setDetailsData({ ...detailsData, name: e.target.value });
              }}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={detailsData.email}
              name="email"
              onChange={(e) => {
                setDetailsData({ ...detailsData, email: e.target.value });
              }}
              required
            />
          </div>
          <div>
            <label>Body:</label>
            <textarea
              name="body"
              value={detailsData.body}
              onChange={(e) => {
                setDetailsData({ ...detailsData, body: e.target.value });
              }}
              required
            />
          </div>
          <button type="submit">Save Changes</button>
          <button
            type="button"
            onClick={() => {
              setEditMode(false);
              setDetailsData({
                name: details.name,
                email: details.email,
                body: details.body,
              });
              setError(null);
            }}
          >
            Cancel
          </button>
        </form>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
