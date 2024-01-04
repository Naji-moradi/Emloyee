import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";
userList;
const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    updatEmployee: (state, action) => {
      const {
        id,
        firstName,
        middleName,
        lastName,
        gender,
        phoneNumber,
        email,
        contactModes,
        maritalStatus,
        immediateJoiner,
      } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        (uu.id = id),
          (uu.firstName = firstName),
          (uu.middleName = middleName),
          (uu.lastName = lastName),
          (uu.gender = gender),
          (uu.phoneNumber = phoneNumber),
          (uu.email = email),
          (uu.contactModes = contactModes),
          (uu.maritalStatus = maritalStatus),
          (uu.immediateJoiner = immediateJoiner);
      }
    },

    deleteEmployee: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },
  },
});
export const { addEmployee, updatEmployee, deleteEmployee } = userSlice.actions;

export default userSlice.reducer;
