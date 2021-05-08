import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import NavBar from './NavBar';
import PublicImages from './PublicImages';
import UserImages from './UserImages';

import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
import UploadModal from './UploadModal';

import { Container, Divider } from 'semantic-ui-react';

const propTypes = {};
const defaultProps = {};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {signinModal: false, signupModal: false, uploadModal: false};
    
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal = (type) => {
        this.setState({[type]: true});
    };    
    
    closeModal = (type) => {
        this.setState({[type]: false});
    };

    render() {
        return (
            <>
                <Container style={{marginTop: '7em'}}>
                    <NavBar openFunction={this.openModal} />
        
                    <UserImages />

                    <Divider />

                    <PublicImages />
                </Container>

                <SignInModal isOpen={this.state.signinModal} closeFunction={this.closeModal} />
                <SignUpModal isOpen={this.state.signupModal} closeFunction={this.closeModal} />
                <UploadModal isOpen={this.state.uploadModal} closeFunction={this.closeModal} />
            </>
        );
    }
}

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;