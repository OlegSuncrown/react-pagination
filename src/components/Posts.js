import React from 'react'

function Posts({posts}) {
  return (
    <ul className="list-group my-4">
      {posts.map((post, index) => {
        return (<li key={index} className="list-group-item">{post.title}</li>)
      })}
    </ul>
  )
}

export default Posts
