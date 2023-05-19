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
    <div className="flex bg-gradient-to-t from-red-500 to-orange-600 flex-col min-h-screen">
      <div className="flex-1 flex">
        <SideBar user={user} setTogglePosts={setTogglePosts}/>
        <div
          className="flex-1 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 3rem)" }}
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