import React from 'react';
import PropTypes from 'prop-types';

import { Button, Form, Modal } from 'semantic-ui-react';

const propTypes = {isOpen: PropTypes.bool, closeFunction: PropTypes.func};
const defaultProps = {isOpen: false};

const SignUpModal = ({isOpen, closeFunction}) => {
    return(
        <Modal closeIcon open={isOpen} onClose={() => closeFunction('signupModal')}>
            <Modal.Header>Sign Up</Modal.Header>
            <Modal.Content>
              Create an acount within seconds and begin uploading images publicly and privately!
              
              <br/><br/>

              <Form>
                <Form.Field>
                  <label>User Name</label>
                  <input placeholder='User Name' />
                </Form.Field>
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button primary type='submit'>Create an account</Button>
            </Modal.Actions>
        </Modal>
    );
};

SignUpModal.defaultProps = defaultProps;
SignUpModal.propTypes = propTypes;

export default SignUpModal;