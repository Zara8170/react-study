import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { likePost, dislikePost } from "../reduxComponents/postsSlice";

function PostLists() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
          <p>
            Likes: {post.likes} Dislikes: {post.dislikes}
          </p>
          <button onClick={() => dispatch(likePost(post.id))}>Like</button>
          <button onClick={() => dispatch(dislikePost(post.id))}>Dislike</button>
        </div>
      ))}
    </div>
  );
}

export default PostLists;
