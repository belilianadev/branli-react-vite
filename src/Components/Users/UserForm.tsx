import "antd/es/form/style";
import "antd/es/input/style";
import "antd/es/button/style";
import { layoutForm } from "../../Helpers/settingsFormAntd";

import { Form, Input, Button } from "antd";
import { UserModel } from "../../Models/UserModel";
import { createUser } from "../../Services/UserService";

const initialState: UserModel = {
  usuario: "a",
  contrasenia: "b",
};

const UserForm = () => {
  const [form] = Form.useForm();

  /*  const handleFormChange = (changedValues: any, values: UserModel): void => {
    console.log(
      "probando: " +
        JSON.stringify(changedValues) +
        " values: " +
        JSON.stringify(values)
    );

     form.setFieldsValue({ usuario: "maraina" });

    console.log("SetData2: " + JSON.stringify(form.getFieldsValue(true)));
  }; */

  const handleSubmit = (values: UserModel) => {
    alert("values: " + JSON.stringify(values));
    createUser(values);
  };

  return (
    <div>
      <Form
        {...layoutForm}
        form={form}
        name="dataUser"
        initialValues={initialState}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Usuario"
          name="usuario"
          rules={[{ required: true, message: "Ingresa tu nombre de usuario" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="contrasenia"
          rules={[
            { required: true, message: "Ingresa la contraseña correcta" },
          ]}
        >
          <Input.Password />
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
