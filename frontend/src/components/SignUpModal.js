import React from 'react';
import PropTypes from 'prop-types';

import { Button, Form, Modal } from 'semantic-ui-react';

const propTypes = {isOpen: PropTypes.bool, closeFunction: PropTypes.func, createUserAccount: PropTypes.func};
const defaultProps = {isOpen: false};

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: '', disabled: false, msg: 'Create an acount within seconds and begin uploading images publicly and privately!'};
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleSubmit = () => {
    this.props.createUserAccount(this.state.username).then(response => {
      if (response[0] === true) {
        this.setState({msg: response[1].msg, disabled: true});
      } else {
        this.setState({msg: response[1].msg});
      }
    });
  };

  render() {
    const { username, msg } = this.state;
    return(
      <Modal closeIcon open={this.props.isOpen} onClose={() => this.props.closeFunction('signupModal')}>
          <Modal.Header>Sign Up</Modal.Header>
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
                  disabled={this.state.disabled}
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button primary type='submit' onClick={this.handleSubmit} disabled={this.state.disabled}>Create an account</Button>
          </Modal.Actions>
      </Modal>
    );
  }
}

SignUpModal.defaultProps = defaultProps;
SignUpModal.propTypes = propTypes;

export default SignUpModal;