import React from "react";
import { Grid } from "semantic-ui-react";

/**
 * PANALS
 *
 */

import UserPanal from "./components/Pages/User/UserPanal";
import FollowersPanal from "./components/Pages/Folowers/FollowesPanal";
import PostsPanal from "./components/Pages/Posts/PostsPanal";

class App extends React.Component {
  render() {
    return (
      <Grid container padded stackable divided="vertically" centered>
        <Grid.Column width={3}>
          {" "}
          <UserPanal />
        </Grid.Column>

        <Grid.Column width={9}>
          <PostsPanal />
        </Grid.Column>

        <Grid.Column width={4}>
          <FollowersPanal />
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
