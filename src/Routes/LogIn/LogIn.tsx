import "./LogIn.css";
import { Button, Col, Form, Input, Row } from "antd";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";

const LogIn = () => {
  const { logIn } = useContext(UserContext);

  const handleSubmit = (values: any) => {
    logIn();
    console.log("Success:", values);
  };

  const handleSubmitFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row style={{ height: "100vh" }} align="middle" justify="center">
      <div className="box-login">
        <div className="box-logo-login">Branli</div>
        <div className="box-login-form">
          <Form
            name="formLogin"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={handleSubmit}
            onFinishFailed={handleSubmitFailed}
          >
            <Form.Item
              label="Usuario"
              name="usuario"
              rules={[{ required: true, message: "Introduce tu usuario" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="contrasenia"
              rules={[{ required: true, message: "Introduce tu contrseña" }]}
            >
              <Input.Password />
            </Form.Item>

            <Row justify="center">
              <Col xs={24} xl={{ span: 6, offset: 4 }}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </Row>
  );
};

export default LogIn;
