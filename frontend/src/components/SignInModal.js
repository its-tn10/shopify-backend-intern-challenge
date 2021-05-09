import React from 'react';
import PropTypes from 'prop-types';

import { Button, Form, Modal } from 'semantic-ui-react';

const propTypes = {isOpen: PropTypes.bool, closeFunction: PropTypes.func};
const defaultProps = {isOpen: false};

class SignInModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: '', disabled: false, msg: 'Access your account and begin uploading images publicly and privately within seconds!'};
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleSubmit = () => {
    this.props.loginUserAccount(this.state.username).then(response => {
      this.setState({msg: response[1].msg});
    });
  };

  render() {
    const { username, msg } = this.state;
    return(
      <Modal closeIcon open={this.props.isOpen} onClose={() => this.props.closeFunction('signinModal')}>
          <Modal.Header>Sign In</Modal.Header>
          <Modal.Content>
            {msg}
            
            <br/><br/>

            <Form>
              <Form.Field>
                <label>User Name</label>          
                <Form.Input
                  placeholder='User Name'
                  name='username'
                  value={username}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button primary type='submit' onClick={this.handleSubmit}>Log in to account</Button>
          </Modal.Actions>
      </Modal>
    );
  }
}

SignInModal.defaultProps = defaultProps;
SignInModal.propTypes = propTypes;

export default SignInModal;