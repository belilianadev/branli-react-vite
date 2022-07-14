import PropTypes from "prop-types";
import { createContext, useState } from "react";

interface UserContextModel {
  isLogUser: boolean;
  logIn: () => void;
  logOut: () => void;
}

type Props = {
  children: JSX.Element;
};

const initialValue: UserContextModel = {
  isLogUser: false,
  logIn: () => {},
  logOut: () => {},
};

export const UserContext = createContext(initialValue);

const UserProvider: React.FC<Props> = (props) => {
  const [isLogUser, setIsLogUser] = useState(initialValue.isLogUser);

  const logIn = () => {
    setIsLogUser(true);
  };

  const logOut = () => {
    setIsLogUser(false);
  };

  return (
    <UserContext.Provider value={{ isLogUser, logIn, logOut }}>
      {props.children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default UserProvider;
