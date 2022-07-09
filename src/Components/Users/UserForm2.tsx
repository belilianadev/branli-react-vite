import { Form, Input, Button } from "antd";
import { ChangeEvent, useState } from "react";
import { FieldData } from "../../models/AntIntefaces";
import { UserModel } from "../../models/UserModel";
import { createUser } from "../../Services/UserService";

const initialState: UserModel = {
  usuario: "",
  contrasenia: "",
};

const UserForm = () => {
  const [userData, setUserData] = useState(initialState);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [evt.target.name]: evt.target.value,
    });
    console.log("SetData: " + userData.usuario + " " + evt.target.name);
  };

  const handleFormChange = (
    changedFields: FieldData[],
    allFields: FieldData[]
  ): void => {
    console.log("SetData2: " + JSON.stringify(changedFields[0].name));
  };

  const handleSubmit = (values: UserModel) => {
    alert("values: " + JSON.stringify(values));
    const u: UserModel = {
      usuario: values.usuario,
      contrasenia: values.contrasenia,
    };
    createUser(u);
  };

  return (
    <div>
      <form>
        <input
          name="usuario"
          onChange={handleChange}
          value={userData.usuario}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFieldsChange={handleFormChange}
      >
        <Form.Item
          label="usuario"
          name="usuario"
          rules={[{ required: true, message: "Ingresa tu nombre de usuario" }]}
        >
          <Input onChange={handleChange} />
        </Form.Item>

        <Form.Item
          label="Contrasenia"
          name="contrasenia"
          initialValue={userData.usuario}
          rules={[
            { required: true, message: "Ingresa la contraseña correcta" },
          ]}
        >
          <Input.Password onChange={handleChange} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserForm;
