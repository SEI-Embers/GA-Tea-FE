import React, { useState } from "react";
import EditPostModal from "../EditPostModal/EditPostModal.jsx";
import { deletePosts } from "../../services/posts";

export default function Post({ post, user, setTogglePosts }) {
  const [showAllComments, setShowAllComments] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [comments, setComments] = useState([
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra justo vel tortor malesuada commodo. Donec ac lacinia velit.",
    },
    {
      name: "Bob Smith",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      content:
        "Nam consequat elit vel dolor suscipit lobortis. Duis iaculis justo at elit egestas ullamcorper. Fusce malesuada sapien sit amet urna bibendum, quis interdum enim rutrum.",
    },
  ]);


  const displayedComments = showAllComments ? comments : comments.slice(0, 1);

  const handleEllipsisClick = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const handleCommentChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (commentInput.trim() !== "") {
      const newComment = {
        name: "User",
        image: "https://randomuser.me/api/portraits/men/99.jpg",
        content: commentInput,
      };
      setComments([...comments, newComment]);
      setCommentInput("");
    }
  };

  const handleToggleComments = () => {
    setShowAllComments(!showAllComments);
  };

  const handleDelete = async () => {
    await deletePosts(post.id);
    setTogglePosts((prev) => !prev);
  };

  const handleEdit = () => {
    setShowEditModal(true);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      {showEditModal && (
        <EditPostModal
          setShowEditModal={setShowEditModal}
          setTogglePosts={setTogglePosts}
          postId={post.id}
          user={user}
        />
      )}
      <div className="bg-white border border-orange-500 border-2 rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        <div className="flex flex-col items-start mb-4">
          <h2 className="text-sm text-gray-950 font-bold pb-2">{post.owner}</h2>
          <h3 className="text-lgtext-gray-950 font-bold mb-2">{post.title}</h3>
          {user?.username === post.owner ? (
            <div>
              <button className="ellipsis-button absolute top-0 right-4 text-3xl" onClick={handleEllipsisClick}>
                &#8230;</button>
                {showOptions && (
                    <div>
                    <button className="absolute top-10 right-1 text-black-500 hover:text-blue-700 hover:font-bold hover:underline" 
                  onClick={handleEdit}>
                    Edit
                  </button>
                  <button className="absolute top-14 right-1 text-black-500 hover:text-red-700 hover:font-bold hover:underline" 
                  onClick={handleDelete}>
                    Delete
                  </button>
                    </div>
                    )}
            </div>
          ) : null}
        </div>
        <p className="text-gray-800 mb-4">{post.body}</p>
        <img src={post.pic} alt={post.title} />
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            className="w-full rounded-lg p-2 mb-4"
            placeholder="Add a comment..."
            value={commentInput}
            onChange={handleCommentChange}
          />
        </form>
        <div className="flex flex-col space-y-2">
          {displayedComments.map((comment, index) => (
            <div key={index} className="flex items-start space-x-2">
              <img
                className="w-6 h-6 rounded-full"
                src={comment.image}
                alt="user avatar"
              />
              <div>
                <span className="font-bold text-sm">{comment.name}</span>
                <p className="border border-gray-300 rounded-lg p-1 text-sm break-words">
                  {comment.content}
                </p>
              </div>
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
        <p className="text-sm text-gray-950 absolute bottom-0 right-0 p-2">
          {formatDate(post.created_at)}
        </p>
      </div>
    </div>
  );
}
