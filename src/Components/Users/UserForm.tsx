import { layoutForm } from "../../helpers/settingsFormAntd";

import { Form, Input, Button, Row, Col } from "antd";
import { UserModel } from "../../models/UserModel";

const UserForm = (initialState: any, method: any) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: UserModel) => {
    method(values);
  };

  return (
    <Form
      {...layoutForm}
      form={form}
      name="dataForm"
      initialValues={initialState}
      onFinish={handleSubmit}
    >
      <Row justify="start">
        <Col span={12}>
          <Form.Item
            label="Usuario"
            name="usuario"
            rules={[
              { required: true, message: "Ingresa tu nombre de usuario" },
            ]}
            hasFeedback={true}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label="Nombre"
        name="nombre"
        rules={[{ required: true, message: "Ingresa tu nombre de usuario" }]}
        hasFeedback={true}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Nombre2"
        name="nombre2"
        rules={[{ required: true, message: "Ingresa tu nombre de usuario" }]}
        hasFeedback={true}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Nombre3"
        name="nombre3"
        rules={[{ required: true, message: "Ingresa tu nombre de usuario" }]}
        hasFeedback={true}
      >
        <Input />
      </Form.Item>{" "}
      <Form.Item
        label="Nombre4"
        name="nombre4"
        rules={[{ required: true, message: "Ingresa tu nombre de usuario" }]}
        hasFeedback={true}
      >
        <Input />
      </Form.Item>{" "}
      <Form.Item
        label="Nombre5"
        name="nombre5"
        rules={[{ required: true, message: "Ingresa tu nombre de usuario" }]}
        hasFeedback={true}
      >
        <Input />
      </Form.Item>{" "}
      <Form.Item
        label="Nombre6"
        name="nombre6"
        rules={[{ required: true, message: "Ingresa tu nombre de usuario" }]}
        hasFeedback={true}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Nombree"
        name="nombree"
        rules={[{ required: true, message: "Ingresa tu nombre de usuario" }]}
        hasFeedback={true}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Contraseña"
        name="contrasenia"
        hasFeedback={true}
        rules={[{ required: true, message: "Ingresa la contraseña correcta" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
