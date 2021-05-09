import React from 'react';
import PropTypes from 'prop-types';

import { Divider, Grid, Header, Image } from 'semantic-ui-react';

const propTypes = {images: PropTypes.array};
const defaultProps = {};

class PublicImages extends React.Component {
    render() {
        return(
            <>
                <Header as ='h2' inverted textAlign='center'>
                    Latest Images
                </Header>
                
                <Divider />

                <Grid columns={1}>
                    <Grid.Column>
                        <Grid columns={this.props.images.length}>
                            {this.props.images.map(function(value, index){
                                return <Grid.Column><Image src={`http://18.207.149.129:5000/image/view?imageId=${value._id}`} size='small' /></Grid.Column>
                            })}
                        </Grid>
                    </Grid.Column>
                </Grid>
            </>
        );
    }
}

PublicImages.defaultProps = defaultProps;
PublicImages.propTypes = propTypes;

export default PublicImages;