import React from 'react';
import PropTypes from 'prop-types';

import { Button, Container, Menu } from 'semantic-ui-react';

const propTypes = {openFunction: PropTypes.func};
const defaultProps = {};

const NavBar = ({openFunction}) => {
    return(
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    Shopify Challenge
                </Menu.Item>
                <Menu.Item><Button primary onClick={() => openFunction('uploadModal')}>Upload Image</Button></Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item><Button primary onClick={() => openFunction('signinModal')}>Sign In</Button></Menu.Item>
                    <Menu.Item><Button positive onClick={() => openFunction('signupModal')}>Sign Up</Button></Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    );
};

NavBar.defaultProps = defaultProps;
NavBar.propTypes = propTypes;

export default NavBar;