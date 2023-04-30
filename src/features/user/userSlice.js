import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../firebase/firebase";

const INITIAL_STATE = { name: "", email: "", photo: "" };

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setUserData: (state, action) => {
      console.log("action–>", action);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    signOutUser: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
  extraReducers: {},
});

export default userSlice.reducer;
export const { setUserData, signOutUser } = userSlice.actions;
