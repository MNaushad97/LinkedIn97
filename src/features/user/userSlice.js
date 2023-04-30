import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../firebase/firebase";

const INITIAL_STATE = { name: "", email: "", photo: "" };

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.user;
    },
  },
  extraReducers: {},
});

export default userSlice.reducer;
export const { setUserData } = userSlice.actions;
