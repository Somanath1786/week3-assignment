import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ShoppingItem from './ShoppingItem'
import { Button, Card } from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';


const styles = theme => ({
    background: {
        background: lightGreen[200]         
    },
    button: {
        marginTop: 10,
        
      },
  });

class ShoppingCart extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.background}>
                <Button color= "primary" variant="contained" className={classes.button}> Shopping Cart </Button>
                <ShoppingItem />
                <ShoppingItem />
                <ShoppingItem />
                </Card>
            </div>
        );
    };
}

export default withStyles(styles)(ShoppingCart);
