import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, provider } from "../../firebase/firebase";
const INITIAL_STATE = { user: null };

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    signInAPI: () => {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          console.log("result–>", result);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
});

export default userSlice.reducer;
export const { signInAPI } = userSlice.actions;

/*

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


const signIn = createAsyncThunk("user/signIn", () => {
  auth
    .signInwithPopup(provider)
    .then((payload) =>
      console.log("p–>", payload).catch((err) => alert(err.message))
    );
});


*/
