import { useState } from "react";
import {useNavigate} from "react-router-dom";
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
          {showCreateModal && <CreatePostModal setShowCreateModal={setShowCreateModal} setTogglePosts={setTogglePosts}/>}    
      {/* Sidebar */}
      <div
        className="rounded-lg bg-white shadow-lg p-6 w-80 border border-white"
        // style={{
        //   backgroundImage: `url(${require("../../assets/GA-b&w.jpg")})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="font-sans bg-opacity-50 rounded-md p-4">
          {/* Display user's image */}
          <img
            src={user?.pic}
            alt="User"
            className="w-24 h-24 rounded-full mb-6 m-auto"
          />
          <p className="text-gray-800 text-xl cursor-pointer mb-6 text-center">
            Welcome {user?.username}
          </p>

          {/* Create a post */}
          <p className="text-gray-800 text-xl cursor-pointer mb-6 text-center" onClick={handleSubmit}>
            Create a post
          </p>

          {/* Filter a post */}
          <div className="text-gray-500 font-bold text-xl mb-6 text-center">
            <p
            // style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'}}
            >Filter a post:</p>
            <div className="flex flex-col">
              <button
                className="border border-gray-500 rounded-lg p-1 mb-1 text-sm shadow"
                onClick={handleSortByDate}
                // style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'}}
              >
                By Date
              </button>
              <button
                className="border border-gray-500 rounded-lg p-1 mb-1 text-sm shadow"
                onClick={handleSortByTags}
                // style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'}}
              >
                By Tag
              </button>
              <button
                className="border border-gray-500 rounded-lg p-1 mb-1 text-sm shadow"
                onClick={handleSortByUser}
                // style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'}}
              >
                By User
              </button>
              <button
                className="border border-gray-300 rounded-lg p-1 mb-1 text-sm shadow"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
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

