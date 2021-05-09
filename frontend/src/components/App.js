import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import PublicImages from './PublicImages';
import UserImages from './UserImages';

import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
import UploadModal from './UploadModal';

import { Container, Divider } from 'semantic-ui-react';

const propTypes = {createUserAccount: PropTypes.func, loginUserAccount: PropTypes.func, logoutUser: PropTypes.func, uploadImages: PropTypes.func,
                    username: PropTypes.string, user_images: PropTypes.array, images: PropTypes.array, curr_img: PropTypes.string};
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
                    <NavBar openFunction={this.openModal} username={this.props.username} signOutFunction={this.props.logoutUser} />
        
                    <UserImages />

                    <Divider />

                    <PublicImages />
                </Container>

                <SignInModal isOpen={this.state.signinModal} closeFunction={this.closeModal} loginUserAccount={this.props.loginUserAccount} />
                <SignUpModal isOpen={this.state.signupModal} closeFunction={this.closeModal} createUserAccount={this.props.createUserAccount} />
                <UploadModal isOpen={this.state.uploadModal} closeFunction={this.closeModal} uploadFunction={this.props.uploadImages} username={this.props.username} />
            </>
        );
    }
}

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;