import { useEffect } from "react";
import { ListUser } from "../../Services/UserService";

const UserList = () => {
  useEffect(() => {
    console.log("fetch");
    ListUser();
  }, []);

  return <div></div>;
};

export default UserList;
