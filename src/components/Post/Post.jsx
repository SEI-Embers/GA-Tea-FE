import React, { useState } from "react";
import EditPostModal from "../EditPostModal/EditPostModal.jsx";
import { deletePosts } from "../../services/posts";

export default function Post({ post, user, setTogglePosts }) {
  const [showAllComments, setShowAllComments] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [showEditModal, setShowEditModal] = useState(false)
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
    {
      name: "Alice Johnson",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      content:
        "Aliquam tincidunt imperdiet dignissim. Fusce sed vestibulum nisl. Donec sit amet mauris congue, imperdiet ex sit amet, commodo quam.",
    },
    {
      name: "Mark Lee",
      image: "https://randomuser.me/api/portraits/men/92.jpg",
      content:
        "Donec ac posuere velit. Praesent eget tincidunt lectus. Morbi maximus consectetur ex, non tristique nunc volutpat sit amet.",
    },
  ]);

  const displayedComments = showAllComments ? comments : comments.slice(0, 1);

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
    setShowEditModal(true)
  }

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      {showEditModal && <EditPostModal setShowEditModal={setShowEditModal} setTogglePosts={setTogglePosts} postId={post.id}/>}    
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            className="text-lg font-bold w-full rounded-lg p-2 mb-4"
            placeholder={post.title}
          />
          <span className="text-sm text-gray-500 self-end">
            {/* {post.date} */}
          </span>
          {user?.id === post.owner ? (
            <div>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          ) : null}
        </div>
        <textarea
          className="w-full rounded-lg p-2 mb-4"
          placeholder={post.body}
        ></textarea>
        <img src={post.pic} alt={post.title} />
        <input
          type="text"
          className="w-full rounded-lg p-2 mb-4"
          placeholder="Hashtags"
        />
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
      </div>
    </div>
  );
}
