import { useRef, useEffect } from "react";
import { createPosts, updatePost, getPost } from "../../services/posts.js";

export default function EditPostModal({ setShowEditModal, setTogglePosts, postId, user }) {

  const titleRef = useRef();
  const bodyRef = useRef();
  const picRef = useRef();
  const skillsRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      owner: user.id,
      title: titleRef.current.value,
      body: bodyRef.current.value,
      pic: picRef.current.value,
      skills: [skillsRef.current.value],
    };
    setShowEditModal(false);
    await updatePost(postId, data);
    setTogglePosts(prev => !prev)
  };

  const handleClose = () => {
    setShowEditModal(false);
  };

  useEffect(()=>{
    const fetchPost = async () => {
        const post = await getPost(postId)

        titleRef.current.defaultValue = post.title
        bodyRef.current.defaultValue = post.body
        picRef.current.defaultValue = post.pic
        skillsRef.current.defaultValue = post.skills
    }
    fetchPost()
  }, [postId])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative bg-white rounded-lg shadow-lg p-6 w-96 mx-auto">
        <button
          className="absolute top-2 right-2 text-black-500 hover:text-gray-700"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            ref={titleRef}
            className="p-3 text-sm border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            ref={bodyRef}
            className="p-3 text-sm border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Add a photo"
            ref={picRef}
            className="p-3 text-sm border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Whatcha good at?"
            ref={skillsRef}
            className="p-3 text-sm border border-gray-300 rounded"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-red-500 transition duration-500 ease-in-out hover:font-bold text-white py-2 px-3 rounded"
          />
        </form>
      </div>
    </div>
  );
}
