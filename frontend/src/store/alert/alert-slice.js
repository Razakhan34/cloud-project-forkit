// // alertSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   visible: false,
//   type: "",
//   message: "",
// };

// const alertSlice = createSlice({
//   name: "alert",
//   initialState,
//   reducers: {
//     hideAlert: (state) => {
//       state.visible = false;
//     },
//     showAlert: (state, action) => {
//       state.visible = true;
//       state.type = action.payload.type;
//       state.message = action.payload.message;
//     },
//   },
// });

// export const { hideAlert, showAlert } = alertSlice.actions;
// export default alertSlice;
