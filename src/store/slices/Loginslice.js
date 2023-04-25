import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: localStorage.getItem("userName") || "",
  auth: localStorage.getItem("auth") || false,
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
      state.auth = true;
      localStorage.setItem("userName", action.payload);
      localStorage.setItem("auth", true);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserName } = LoginSlice.actions;

export default LoginSlice.reducer;
