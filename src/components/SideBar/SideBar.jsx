import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import CreatePostModal from "../CreatePostModal.jsx/CreatePostModal.jsx"
import { signOut } from "../../services/users.js"
export default function SideBar({user, setTogglePosts}) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false)
  const navigate = useNavigate()
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleSortByDate = () => {
    // Handle sort by date functionality
  };
  const handleSortByTags = () => {
    // Handle sort by tags functionality
  };
  const handleSortByUser = () => {
    // Handle sort by user functionality
  };
  const handleSubmit = async () => {
    setShowCreateModal(true)
  };
  const handleSignOut = async () => {
    await signOut()
    navigate("/")
  };
  return (
    <>
    <div className="flex pl-32 pb-20 items-center">
          {showCreateModal && <CreatePostModal user={user} setShowCreateModal={setShowCreateModal} setTogglePosts={setTogglePosts}/>}    
      {/* Sidebar */}
      <div className="border border-orange-400 border-2 rounded-md bg-white shadow-lg p-6 w-72">
        <div>
          {/* Display user's image */}
          <img
            src={user?.pic}
            alt="User"
            className="w-24 h-24 rounded-full mb-6 m-auto"
          />
          <p className="text-gray-800 text-xl cursor-pointer mb-6 text-center hover:underline">
            <Link to='/profile'>Welcome, {user?.username}!</Link>
          </p>
          {/* Create a post */}
          <p className="text-gray-800 text-xl cursor-pointer mb-6 text-center hover:underline" onClick={handleSubmit}>
            Create a post
          </p>
          {/* Filter a post */}
          <div className="text-gray-800 text-xl mb-6 text-center">
            <p>Filter a post:</p>
            <div className="flex flex-col">
              <button
                className="border border-gray-300 rounded-lg p-1 mb-1 text-sm shadow"
                onClick={handleSortByDate}
              >
                By Date
              </button>
              <button
                className="border border-gray-300 rounded-lg p-1 mb-1 text-sm shadow"
                onClick={handleSortByTags}
              >
                By Tag
              </button>
              <button
                className="border border-gray-300 rounded-lg p-1 mb-1 text-sm shadow"
                onClick={handleSortByUser}
              >
                By User
              </button><br />
              <p
                className="text-gray-700 text-xl cursor-pointer mb-6 text-center hover:underline"
                onClick={handleSignOut}
              >
                Sign Out
              </p>
            </div>
          </div>
          {/* <p
            className="text-gray-800 text-xl cursor-pointer mb-6 text-center"
            onClick={signOut}
          >
            Sign Out
          </p> */}
        </div>
      </div>
    </div>
    </>
  );
}

