import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import NavBar from './NavBar';
import PublicImages from './PublicImages';
import UserImages from './UserImages';

import { Container, Divider } from 'semantic-ui-react';

const propTypes = {};
const defaultProps = {};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Container text style={{marginTop: '7em'}}>
                <NavBar />
    
                <UserImages />

                <Divider />

                <PublicImages />
            </Container>
        );
    }
}

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;