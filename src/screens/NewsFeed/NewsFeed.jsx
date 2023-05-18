import React, { useState, useEffect } from "react";
import { getPosts } from "../../services/posts.js";
import SideBar from "../../components/SideBar/SideBar";
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";

export default function NewsFeed() {
  const [posts, setPosts] = useState([]);

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
    // console.log(post);
  }, []);

  // map through in return
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex">
        <SideBar />
        <div
          className="flex-1 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 5rem)" }}
        >
          <div>
          {posts.map((post) => (
             <Post post={post}/>
          ))}
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
