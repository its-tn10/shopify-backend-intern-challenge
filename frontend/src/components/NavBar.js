import React from 'react';
import PropTypes from 'prop-types';

import { Button, Container, Menu } from 'semantic-ui-react';

const propTypes = {openFunction: PropTypes.func, username: PropTypes.string, signOutFunction: PropTypes.func};
const defaultProps = {};

const GuestView = ({openFunction}) => {
    return(
        <Menu.Menu position='right'>
            <Menu.Item><Button primary onClick={() => openFunction('signinModal')}>Sign In</Button></Menu.Item>
            <Menu.Item><Button positive onClick={() => openFunction('signupModal')}>Sign Up</Button></Menu.Item>
        </Menu.Menu>
    );
};

const UserView = ({username, signOutFunction}) => {
    return(
        <Menu.Menu position='right'>
            <Menu.Item>{username}</Menu.Item>
            <Menu.Item><Button positive onClick={() => signOutFunction()}>Sign Out</Button></Menu.Item>
        </Menu.Menu>
    );
};

const NavBar = ({openFunction, username, signOutFunction}) => {
    return(
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    Shopify Challenge
                </Menu.Item>
                <Menu.Item><Button primary onClick={() => openFunction('uploadModal')}>Upload Image</Button></Menu.Item>

                {username ? <UserView username={username} signOutFunction={signOutFunction} /> : <GuestView openFunction={openFunction} />}
            </Container>
        </Menu>
    );
};

NavBar.defaultProps = defaultProps;
NavBar.propTypes = propTypes;

export default NavBar;