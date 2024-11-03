import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  auth: {
    email: null,
    isAuthenticated: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const { email, password } = action.payload;
      const userExists = state.users.some((user) => user.email === email);
      if (userExists) {
        alert("This email is already registered.");
      } else {
        state.users.push({ email, password });
      }
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find((user) => user.email === email && user.password === password);
      if (user) {
        state.auth = { email, isAuthenticated: true };
      } else {
        alert("Incorrect email or password");
      }
    },
    logout: (state, action) => {
      state.auth = { email: null, isAuthenticated: false };
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
