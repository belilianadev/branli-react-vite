import { Form, Input } from "antd";

const useInputAnd = () => {
  return (
    <Form.Item
      label="Usuario"
      name="usuario"
      rules={[{ required: true, message: "Ingresa tu nombre de usuario" }]}
      hasFeedback={true}
    >
      <Input />
    </Form.Item>
  );
};

export default useInputAnd;
