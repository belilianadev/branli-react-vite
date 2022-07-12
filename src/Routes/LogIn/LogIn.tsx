import "./LogIn2.css";
import { Button, Col, Form, Input, Row } from "antd";

const Login2 = () => {
  return (
    <Row style={{ height: "100vh" }} align="middle" justify="center">
      <div className="box-login">
        <div className="box-logo-login">Branli</div>
        <div className="box-login-form">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
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

export default Login2;
