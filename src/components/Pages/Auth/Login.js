import React, { Component } from "react";
import { signInUsingCredentials } from "./../../../firesbase/firebase.functions";
import {
  Header,
  Icon,
  Form,
  Container,
  Segment,
  Button,
  Divider,
  Message
} from "semantic-ui-react";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: "",
    errorMail: false,
    errorPassword: false,
    loading: false
  };

  handleSubmitLogin = event => {
    const { email, password } = this.state;
    if (email === "" && password === "") {
      this.setState({
        errors: "Olalah, you can not sign in using empty credentials",
        errorMail: true,
        errorPassword: true
      });
    } else if (email === "") {
      this.setState({
        errors: "Not that, your email input is empthy",
        errorMail: true
      });
    } else if (password === "") {
      this.setState({
        errors: "Not that, type your password",
        errorPassword: true
      });
    } else {
      signInUsingCredentials(email, password);
      this.setState({
        errorMail: false,
        password: "",
        errorPassword: false,
        email: "",
        loading: true
      });
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { errors, errorMail, errorPassword, loading } = this.state;
    return (
      <Container style={{ paddingTop: "3px" }}>
        <Segment stacked>
          <Header textAlign="center" color="violet" inverted>
            <Header.Content className="titleHome">
              LOGIN AND start making Amazing things
            </Header.Content>
          </Header>
          <Form onSubmit={this.handleSubmitLogin}>
            {" "}
            <Form.Field>
              <Form.Input
                error={errorMail}
                icon="at"
                iconPosition="left"
                fluid
                onChange={this.handleChange}
                type="email"
                name="email"
                label="Email"
                labelPosition="right"
              />

              <Form.Input
                error={errorPassword}
                onChange={this.handleChange}
                name="password"
                label="password"
                labelPosition="right"
                icon="lock"
                iconPosition="left"
                fluid
                type="password"
              />
            </Form.Field>
            <Divider horizontal>
              <Button primary loading={loading}>
                SIGN{" "}
              </Button>
            </Divider>
          </Form>
          {errors.length > 0 ? <Message error> {errors}</Message> : ""}
          <Divider horizontal>
            <Button color="google plus">
              <Icon name="google" />
              SIGN IN WITH GOOGLE !
            </Button>
            OR{" "}
            <Button color="facebook">
              <Icon name="facebook" />
              SIGN IN WITH FACEBOOK !
            </Button>
          </Divider>

          <Header color="orange" inverted>
            <Header.Content as="h6" className="loginLink">
              Not part of the family ? Do it here
            </Header.Content>
          </Header>
        </Segment>
      </Container>
    );
  }
}

export default Login;
