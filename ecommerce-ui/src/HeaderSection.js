// Define your imports here:
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import { Card } from '@material-ui/core';

const styles = {
    root: {
        flexGrow : 1,
    },

    appbar : {
        alignItems : 'center',
        background: lightBlue[200]      
    },
};

class HeaderSection extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={this.props.classes.root}> 
            <Card> 
                <AppBar 
                    className={this.props.classes.appbar}
                    position="static" color="default">
                    <Toolbar>
                        <Typography                             
                            variant="h4" color="inherit ">
                            Soma's Vacation Rentals
                        </Typography>
                    </Toolbar>                    
                </AppBar>
                </Card>               
            </div>
        );
    };
}

export default withStyles(styles)(HeaderSection);