import { Button, Form, Col } from "react-bootstrap";
import style from "./login-form.module.css";

function LoginFrom() {
  return (
    <Col sm={10} lg={4} className={style.form}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>E-mail address</Form.Label>
          <Form.Control type="text" placeholder="E.g. john.smith@email.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Stay logged in" />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
}

export default LoginFrom;
