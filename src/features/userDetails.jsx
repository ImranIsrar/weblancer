
import { createSlice } from "@reduxjs/toolkit";
import secureLocalStorage from "react-secure-storage";


// Get Last activeUser
const storedActiveUser = secureLocalStorage.getItem('activeUser');

  if(!secureLocalStorage.getItem('users')) {
    secureLocalStorage.setItem('users', []);
  }  
  let usersArray = secureLocalStorage.getItem('users');
  console.log('usersArray', usersArray);

// secureLocalStorage.clear();

const initialState = {
  users: usersArray || [],
  loading: false,
  error: null,
  activeUser: storedActiveUser || '' // Initialize with localStorage value if available
};


export const userDetails = createSlice ({
  name: "userDetail",
  initialState,
  reducers: {
    addUser: (state, action) =>  {
      state.users.push(action.payload);

      // Store into LocalStorage
      let users = [...usersArray, action.payload];
      secureLocalStorage.setItem('users', users);
    },
    selectThemeByUser: (state, action) =>  {

      const currentUserIndex = state.users?.findIndex((find) => find?.email === state.activeUser);
      state.users[currentUserIndex].selected_theme = action.payload;

      // Store into LocalStorage
      const users = [...state.users];
      secureLocalStorage.setItem('users', users);
    },
    setActiveUser: (state, action) =>  {
      state.activeUser = action.payload;
      
      // Store active user in localStorage
      secureLocalStorage.setItem('activeUser', action.payload);
    }, 
    logoutUser: (state, action) => {
      state.activeUser = action.payload;

      // Clear active user from localStorage
      secureLocalStorage.removeItem('activeUser');
    },
    favUser: (state, action) => {
      
      let { favId, userId } = action.payload;
      const currentUserIndex = state.users.findIndex((find) => find?.id == userId);
      const user = state.users[currentUserIndex];

      /*
      * First Check id are not Eixts in users[currentUser].fav
        # if Not then Push in users[currentUser].fav
        # else Match Item Remove from users[currentUser].fav
      */

      !(user.fav.includes(favId)) ? (
        user.fav.push(favId),

        // Store into LocalStorage
        secureLocalStorage.setItem('users', [...state.users])
      ) : (
        user.fav.splice(user.fav.findIndex((item) => item == favId), 1),

        // Store into LocalStorage
        secureLocalStorage.setItem('users', [...state.users])
      );
      
    },
    updateUser: (state, action) => {
      const { id } = action.payload;
      const currentUserIndex = state.users.findIndex((find) => find?.id == id);
      const user = {...state.users[currentUserIndex]};
      user = action.payload;

      // Store into LocalStorage
      const users = [...usersArray];
      users[currentUserIndex] = user;
      secureLocalStorage.setItem('users', [...users]);
    }
  },
});

export default userDetails.reducer;
export const { addUser, setActiveUser, selectThemeByUser, logoutUser, favUser, updateUser } = userDetails.actions;