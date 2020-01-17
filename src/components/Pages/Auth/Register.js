import React, { Component } from "react";
import { createUserUsingCredentials } from "./../../../firesbase/firebase.functions";

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

class Register extends Component {
  state = {
    errors: "",
    error: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    checked: false,
    loading: false,
    photoURL: ""
  };

  // submit entering
  handleSubmit = event => {
    const { fullName, email, password, confirmPassword, photoURL } = this.state;

    event.preventDefault();
    if (
      email === "" &&
      fullName === "" &&
      password === "" &&
      confirmPassword === ""
    ) {
      this.setState({ error: "All inputs must be filled" });
    } else if (password.length < 6) {
      this.setState({ error: "All inputs must be more than 6 " });
    } else if (password !== confirmPassword) {
      this.setState({ error: "Passwords do not match" });
    } else {
      createUserUsingCredentials(email, password, fullName, photoURL);

      this.setState({
        error: "",
        email: "",
        fullName: "",
        photoURL: "",
        password: "",
        confirmPassword: "",
        loading: true
      });
    }
  };

  handleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <Container style={{ paddingTop: "3px" }}>
        <Segment stacked>
          <Header textAlign="center" color="violet" inverted>
            <Header.Content className="titleHome">
              Create your account to start making Amazing things
            </Header.Content>
          </Header>
          <Form onSubmit={this.handleSubmit} loading={this.onSubmit}>
            {" "}
            loading
            <Form.Field>
              <Form.Input
                icon="user"
                iconPosition="left"
                fluid
                type="text"
                name="fullName"
                onChange={this.handleChange}
                value={this.state.fullName}
              />
              <Form.Input
                icon="at"
                iconPosition="left"
                fluid
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                fluid
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
              <Form.Input
                icon="redo"
                iconPosition="left"
                fluid
                onChange={this.handleChange}
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
              />
            </Form.Field>
            <Form.Checkbox
              onClick={this.handleChecked}
              label="I agree to the Terms and Conditions"
              onChange={this.handleChange}
            />
            <Divider horizontal>
              <Button
                primary
                disabled={this.state.checked === false}
                loading={this.state.loading}
              >
                SIGN UP NOW
              </Button>
            </Divider>
          </Form>
          {this.state.error.length > 0 ? (
            <Message className="error" error>
              {this.state.error}
            </Message>
          ) : (
            ""
          )}
          <Divider horizontal>
            <Button color="google plus">
              <Icon name="google" />
              SIGN UP USING GOOGLE
            </Button>
            OR{" "}
            <Button color="facebook">
              <Icon name="facebook" />
              SIGN UP USING FACEBOOK
            </Button>
          </Divider>

          <Header color="orange" inverted>
            <Header.Content as="h6" className="loginLink">
              Do you own an account ? Please sign In
            </Header.Content>
          </Header>
        </Segment>
      </Container>
    );
  }
}

export default Register;
