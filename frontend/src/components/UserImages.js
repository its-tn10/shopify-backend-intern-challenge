import React from 'react';
import PropTypes from 'prop-types';

import { Divider, Grid, Header } from 'semantic-ui-react';

const propTypes = {};
const defaultProps = {};

const UserImages = () => {
    return(
        <>
            <Header as ='h2' inverted textAlign='center'>
                Your Images
            </Header>
            
            <Divider />

            <Grid columns={1}>
                <Grid.Column>
                    <Grid columns={3} id='nested'>
                        <Grid.Column>
                            <p />
                        </Grid.Column>
                        <Grid.Column>
                            <p />
                        </Grid.Column>
                        <Grid.Column>
                            <p />
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
        </>
    );
};

UserImages.defaultProps = defaultProps;
UserImages.propTypes = propTypes;

export default UserImages;