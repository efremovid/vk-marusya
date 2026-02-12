import { useEffect } from "react";
import { useAppDispatch } from "../../../entities";
import { setUser } from "../../../entities/user/user-slice";
import { useSelector } from "react-redux";
import { selectUserData } from "../../../entities/user/user-selectors";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("https://cinemaguide.skillbox.cc/profile", { credentials: "include" })
      .then((response) => response.json())
      .then((data) => dispatch(setUser(data)));
  }, []);

  const userData = useSelector(selectUserData);

  console.log(userData);

  return <div>{children}</div>;
};

export default AuthProvider;
