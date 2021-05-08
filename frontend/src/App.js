import React from 'react'
import { Container, Divider, Grid, Header, Menu, Button } from 'semantic-ui-react'

const App = () => (
  <Container style={{ marginTop: '7em' }}>
    <Menu fixed='top' inverted>
        <Container>
            <Menu.Item header>
                Shopify Challenge
            </Menu.Item>
              <Menu.Item><Button primary>Upload Image</Button></Menu.Item>


            <Menu.Menu position='right'>
              <Menu.Item><Button primary>Sign In</Button></Menu.Item>
              <Menu.Item><Button positive>Sign Up</Button></Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>

    <Header as='h2' inverted textAlign='center'>
      Your Images
    </Header>
    <Divider/>
    <Grid columns={1}>
      <Grid.Column>
        <Grid columns={3} id='nested'>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>

    <Divider/>

    <Header as='h2' inverted textAlign='center'>
      Latest Images
    </Header>

    <Divider/>

    <Grid columns={1}>
      <Grid.Column>
        <Grid columns={3}>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>
  </Container>
)

export default App;