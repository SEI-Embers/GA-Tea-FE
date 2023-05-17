import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import CreatePosts from './services/posts.js'

export default function NewsFeed() {

  const response = api.post('ga-tea-be-production.up.railway.app/posts/')


  return (
    <div>
        <NavBar />
        NewsFeed
    </div>
  )
}
