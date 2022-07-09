import { useEffect } from "react";
import { ListUser } from "../../services/UserService";

const UserList = () => {
  useEffect(() => {
    console.log("fetch");
    ListUser();
  }, []);

  return <div></div>;
};

export default UserList;
