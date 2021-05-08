import React from 'react';
import PropTypes from 'prop-types';

import { Button, Form, Modal } from 'semantic-ui-react';

const propTypes = {isOpen: PropTypes.bool, closeFunction: PropTypes.func};
const defaultProps = {isOpen: false};

const SignInModal = ({isOpen, closeFunction}) => {
    return(
        <Modal closeIcon open={isOpen} onClose={() => closeFunction('signinModal')}>
            <Modal.Header>Sign In</Modal.Header>
            <Modal.Content>
              Access your account and begin uploading images publicly and privately within seconds!
              
              <br/><br/>

              <Form>
                <Form.Field>
                  <label>User Name</label>
                  <input placeholder='User Name' />
                </Form.Field>
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button primary type='submit'>Log in to account</Button>
            </Modal.Actions>
        </Modal>
    );
};

SignInModal.defaultProps = defaultProps;
SignInModal.propTypes = propTypes;

export default SignInModal;