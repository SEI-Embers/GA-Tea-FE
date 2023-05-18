import React, { useState, useEffect } from "react";
import { getPosts } from "../../services/posts.js";
import SideBar from "../../components/SideBar/SideBar";
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";

export default function NewsFeed({user}) {
  const [posts, setPosts] = useState([]);
  const [togglePosts, setTogglePosts] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.log("error - failed to get posts");
      }
    };
    fetchPosts();
  }, [togglePosts]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-blue-700 to-blue-950">
      <div className="flex-1 flex">
        <SideBar user={user} setTogglePosts={setTogglePosts}/>
        <div
          className="flex-1 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 5rem)" }}
        >
          <div>
          {posts.map((post) => (
             <Post key={post.id} post={post} user={user} setTogglePosts={setTogglePosts}/>
          ))}
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
