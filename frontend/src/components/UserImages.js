import React from 'react';
import PropTypes from 'prop-types';

import { Divider, Grid, Image, Header } from 'semantic-ui-react';

const propTypes = {images: PropTypes.array, username: PropTypes.string};
const defaultProps = {};

class UserImages extends React.Component {
    constructor(props) {
        super(props);
    }

    GuestMessage() {
        return(
            <Grid columns={1} id='nested'>
                <Grid.Column><p align="center"><b>You are currently a guest. Log in to view your images.</b></p></Grid.Column>
            </Grid>
        );
    }

    GetColumns(images, username) {
        return(
            <Grid columns={images.length} id='nested'>
            {images.map(function(value, index){
                return <Grid.Column><Image src={`http://18.207.149.129:5000/image/view?imageId=${value._id}&username=${username}`} size='small' /></Grid.Column>
            })}
            </Grid>
        );
    }

    render() {
        return(
            <>
                <Header as ='h2' inverted textAlign='center'>
                    Your Images
                </Header>
                
                <Divider />

                <Grid columns={1}>
                    <Grid.Column>
                        {this.props.username ? this.GetColumns(this.props.images, this.props.username) : this.GuestMessage()}
                    </Grid.Column>
                </Grid>
            </>
        );
    }
};

UserImages.defaultProps = defaultProps;
UserImages.propTypes = propTypes;

export default UserImages;