import { useState } from "react";
// import { signOut } from "../../services/users";

export default function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

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

  const createPost = () => {
    //pop up modal to create a post
  }

  return (
    <div className="flex pl-32 pb-20 items-center">
      {/* Sidebar */}
      <div className="rounded-md bg-white shadow-lg p-6 w-72">
        <div>
          {/* Display user's image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdvnQarn7Vt8NK9nMJ2diraaX_yjMrC-gZA&usqp=CAU"
            alt="User"
            className="w-24 h-24 rounded-full mb-6 m-auto"
          />

          <p className="text-gray-800 text-xl cursor-pointer mb-6 text-center">
            My Profile
          </p>

          {/* Create a post */}
          <p className="text-gray-800 text-xl cursor-pointer mb-6 text-center" onClick={createPost}>
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
  );
}
