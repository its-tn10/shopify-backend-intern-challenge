import React from 'react';
import PropTypes from 'prop-types';

import { Button, Header, Icon, Segment, Modal } from 'semantic-ui-react';

const propTypes = {isOpen: PropTypes.bool, closeFunction: PropTypes.func};
const defaultProps = {isOpen: false};

const UploadModal = ({isOpen, closeFunction}) => {
    return(
        <Modal closeIcon open={isOpen} onClose={() => closeFunction('uploadModal')}>
            <Modal.Header>Upload Image</Modal.Header>
            <Modal.Content>
              <Segment placeholder>
                <Header icon>
                  <Icon name='file image' />
                  No images have been selected to be uploaded.
                </Header>
                <Button primary>Add Image</Button>
              </Segment>
            </Modal.Content>
        </Modal>
    );
};

UploadModal.defaultProps = defaultProps;
UploadModal.propTypes = propTypes;

export default UploadModal;