import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import Post from '../../components/Post/Post';
import Footer from '../../components/Footer/Footer';

export default function NewsFeed() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-blue-700 to-blue-950">
      <div className="flex-1 flex">
        <SideBar />
        <div className="flex-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 5rem)' }}>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <Footer />
    </div>
  );
}
