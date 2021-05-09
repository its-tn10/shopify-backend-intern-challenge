import React from 'react';
import PropTypes from 'prop-types';

import { Button, Checkbox, Header, Form, Icon, Segment, Modal } from 'semantic-ui-react';

const propTypes = {isOpen: PropTypes.bool, closeFunction: PropTypes.func, uploadFunction: PropTypes.func};
const defaultProps = {isOpen: false};

class UploadModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {images: [], hidden: false};
  }

  handleChange = (e) => { this.setState({ images: e.target.files }); console.log(e.target.files); };
  handleSubmit = () => {
    let formData = new FormData();
    for (const key of Object.keys(this.state.images))
      formData.append('files', this.state.images[key]);
    formData.append('isHidden', this.state.hidden);
    formData.append('username', this.props.username);

    this.props.uploadFunction(formData).then(response => {
      console.log(response);
    });

    this.setState({images: []});
  };

  render() {
    const { isOpen, closeFunction, username } = this.props;
    return(
        <Modal closeIcon open={isOpen} onClose={() => closeFunction('uploadModal')}>
            <Modal.Header>Upload Image</Modal.Header>
            <Modal.Content>
              <Segment placeholder>
                <Header icon>
                  <Icon name='file image' />
                  No images have been selected to be uploaded.
                </Header>
                <Form><center>
                  <Form.Input type="file" name="images" multiple accept="image/*" onChange={this.handleChange} />
                  <Checkbox label='Make my images hidden' disabled={username === ''} onClick={(evt, data)=>this.setState({hidden: data.checked})}/>
                  <Button primary type='submit' onClick={this.handleSubmit}>Upload</Button>
                </center></Form>
              </Segment>
            </Modal.Content>
        </Modal>
    );
  }
}

UploadModal.defaultProps = defaultProps;
UploadModal.propTypes = propTypes;

export default UploadModal;