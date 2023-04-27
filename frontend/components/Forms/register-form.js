import Link from "next/link";
import { Button, Form, Col } from "react-bootstrap";
import style from "./register-form.module.css";

function RegisterForm() {
  return (
    <Col sm={10} lg={4} className={style.form}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="E.g. John" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="E.g. Smith" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>E-mail address</Form.Label>
          <Form.Control type="text" placeholder="E.g. john.smith@email.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label={
              <Link href="/tos">
                <p>
                  I read and accept <a>terms of service</a>.
                </p>
              </Link>
            }
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
}

export default RegisterForm;
