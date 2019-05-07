import React from 'react';
import RentalCard from './RentalCard'
import { withStyles } from '@material-ui/core/styles';
import { Grid , Button, Card } from '@material-ui/core';

import airBnBRentals from './airbnbs.json';
import { cyan } from '@material-ui/core/colors';

const styles = theme => ({    
    background: {
        background: cyan[300]     
    },
    button: {
        margin: theme.spacing.unit,
        marginBottom : 20,
      },
});

class Rentals extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rentals : airBnBRentals
        }
    }

    render() {
        const {classes} = this.props;        
        const rentalCards = this.state.rentals
                            .map((rental, idx) => {
                                return(
                                    <RentalCard rental={rental} key={idx}/>
                                );
                            });
        return(
            <div>
            <Card className={classes.background}>
                <Button color= "secondary" variant="contained" className={classes.button}> Rentals </Button>
                <Grid container spacing={24}>                   
                    {rentalCards}
                </Grid>
                </Card>    
            </div>
        );
    };
}

export default withStyles(styles)(Rentals);