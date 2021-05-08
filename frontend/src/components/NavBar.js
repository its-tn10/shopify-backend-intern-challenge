import React from 'react';
import PropTypes from 'prop-types';

import { Button, Container, Menu } from 'semantic-ui-react';

const propTypes = {};
const defaultProps = {};

const NavBar = () => {
    return(
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
    );
};

NavBar.defaultProps = defaultProps;
NavBar.propTypes = propTypes;

export default NavBar;