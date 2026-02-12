import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TUserData = {
  favorites: string[];
  surname: string;
  name: string;
  email: string;
};

type TInitialState = {
  isAuth: boolean;
  userData: TUserData;
};

const initialState: TInitialState = {
  isAuth: false,
  userData: {
    favorites: [],
    surname: "",
    name: "",
    email: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUserData>) => {
      state.isAuth = true;
      state.userData = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
