import { UserModel } from "../Models/UserModel";

const URI_USERS = "usuarios";

export const ListUser = () => {
  fetch(import.meta.env.VITE_URL_SERVER + URI_USERS)
    .then((res) => {
      return res.json();
    })
    .then((users) => {
      console.log("users: " + JSON.stringify(users));
    })
    .catch((err) => {
      console.log("ocurrio un error" + err);
    });
};

export const createUser = (user: UserModel) => {
  console.log("usuario para bd: " + JSON.stringify(user));
  fetch(import.meta.env.VITE_URL_SERVER + URI_USERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("user creado: " + JSON.stringify(data));
    })
    .catch((err) => {
      console.log("ocurrio un error al crear usuario" + err);
    });
};

export const getFetch = (URI: string) => {
  fetch(URI)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("data: " + JSON.stringify(data));
    })
    .catch((err) => {
      console.log("ocurrio un error" + err);
    });
};
