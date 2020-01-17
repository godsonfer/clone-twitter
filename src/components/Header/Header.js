import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./../../Redux/actions.redux";

class HeaderComponent extends Component {
  state = { activeItem: "Home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    /**
     * TODO:: WE NEED ANOTHER REDUX REDUCER TO DISPLAY INFORMATIONS ABOUT CURRENT USER LOGGED
     */
    return (
      <div>
        <Menu
          pointing
          secondary
          size="large"
          color="pink"
          style={{ background: "rgb(113, 155, 255)" }}
        >
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          >
            <Link className="link" to="/">
              <Icon name="home" /> HOME
            </Link>
          </Menu.Item>

          <Menu.Item
            name="Sign In"
            active={activeItem === "Sign In"}
            onClick={this.handleItemClick}
          >
            <Link className="link" to="/signin">
              <Icon name="sign in" />
              SIGN IN
            </Link>
          </Menu.Item>
          <Menu.Item
            name="signup"
            active={activeItem === "Sign Up"}
            onClick={this.handleItemClick}
          >
            <Link className="link" to="/signup">
              <Icon name="signup" />
              SIGN UP
            </Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="About Us"
              active={activeItem === "About Us"}
              onClick={this.handleItemClick}
            >
              <Link className="link" to="/about">
                <Icon name="newspaper" /> ABOUT
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
export default connect(null, { setCurrentUser })(HeaderComponent);
