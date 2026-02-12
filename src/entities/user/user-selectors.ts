import type { RootState } from "..";

export const selectIsAuth = (state: RootState) => {
  return state.user.isAuth;
};

export const selectUserData = (state: RootState) => {
  return state.user.userData;
};
