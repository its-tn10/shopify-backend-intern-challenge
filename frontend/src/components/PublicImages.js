import React from 'react';
import PropTypes from 'prop-types';

import { Divider, Grid, Header } from 'semantic-ui-react';

const propTypes = {};
const defaultProps = {};

const PublicImages = () => {
    return(
        <>
            <Header as ='h2' inverted textAlign='center'>
                Latest Images
            </Header>
            
            <Divider />

            <Grid columns={1}>
                <Grid.Column>
                    <Grid columns={3}>
                        <Grid.Column><p /></Grid.Column>
                        <Grid.Column><p /></Grid.Column>
                        <Grid.Column><p /></Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
        </>
    );
};

PublicImages.defaultProps = defaultProps;
PublicImages.propTypes = propTypes;

export default PublicImages;