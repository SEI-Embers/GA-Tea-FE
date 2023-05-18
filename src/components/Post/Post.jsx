import React, { useState, useEffect } from "react";
import { getComments } from "../../services/comments.js";

export default function Post({ post }) {
  const [showAllComments, setShowAllComments] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getComments();
        setComments(data);
      } catch (error) {
        console.log("error - failed to get comments");
      }
    };
    fetchComments();
  }, []);

  const handleCommentChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    // if (commentInput.trim() !== "") {
    //   {const newComment = {
    //     name: "User",
    //     image: "https://randomuser.me/api/portraits/men/99.jpg",
    //     content: commentInput,}
    //   };
    //   setComments([...comments, newComment]);
    //   setCommentInput("");
    // }
  };

  const handleToggleComments = () => {
    setShowAllComments(!showAllComments);
  };

  const handleDeletePost = () => {
    // Logic to delete the post
    console.log("Deleting post...");
  };

  const handleEditPost = () => {
    // Logic to edit the post
    console.log("Editing post...");
  };

  const [showOptions, setShowOptions] = useState(false);

  const displayedComments = showAllComments ? comments : comments.slice(0, 1);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="bg-white border border-blue-800 rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        {showOptions && (
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg max-w-xs">
              <button
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                onClick={handleEditPost}
              >
                Edit
              </button>
              <button
                className="block px-4 py-2 text-red-500 hover:bg-gray-200 w-full text-left"
                onClick={handleDeletePost}
              >
                Delete
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-between mb-4">
          <div className="flex flex-col">
            <h2 className="text-lg text-gray-950 font-bold">{post.owner}</h2>
            <h3 className="text-lg text-gray-950 font-bold mb-2">
              {post.title}
            </h3>
          </div>
          <p className="text-sm text-gray-950">
            {formatDate(post.created_at)}
          </p>
        </div>
        <p className="text-gray-800 mb-4">{post.body}</p>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            className="w-full rounded-lg p-2 mb-4"
            placeholder="Add a comment..."
            value={commentInput}
            onChange={handleCommentChange}
          />
        </form>
        <div className="flex flex-col space-y-4">
          {displayedComments.map((comment, index) => (
            <div key={index}>
              <span className="font-bold text-sm">{comment.name}</span>
              <p className="border border-gray-300 rounded-lg p-2 text-sm break-words">
                {comment.owner}: &nbsp;
                {comment.body}
              </p>
            </div>
          ))}
        </div>
        {!showAllComments && comments.length > 1 && (
          <button
            className="text-blue-500 hover:underline text-sm mt-4"
            onClick={handleToggleComments}
          >
            Load Comments
          </button>
        )}

        {showAllComments && (
          <button
            className="text-red-500 hover:underline text-sm mt-4"
            onClick={handleToggleComments}
          >
            Close Comments
          </button>
        )}

        <div className="absolute bottom-0 right-0 mb-2 mr-2">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setShowOptions(!showOptions)}
          >
            ...
          </button>
        </div>
      </div>
    </div>
  );
}