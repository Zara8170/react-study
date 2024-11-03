import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    { id: 1, content: "Post 1", likes: 0, dislikes: 0 },
    { id: 2, content: "Post 2", likes: 0, dislikes: 0 },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    likePost: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) post.likes += 1;
    },
    dislikePost: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) post.dislikes += 1;
    },
  },
});

export const { likePost, dislikePost } = postsSlice.actions;
export default postsSlice.reducer;
