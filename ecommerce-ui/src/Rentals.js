import React from 'react';
import RentalCard from './RentalCard'
import { withStyles } from '@material-ui/core/styles';
import { Grid , Button, Card } from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';

const styles = theme => ({    
    background: {
        background: cyan[300],
    },
    button: {
        margin: theme.spacing.unit,
        marginTop : 20,
        marginBottom : 20,
        float: "left",
        position: "relative",
        right:"-1%"
      },
});

class Rentals extends React.Component {

    render() {
        const {classes, rentals, onClick} = this.props;       
        
        const rentalCards = rentals
                            .map((rental, idx) => {
                                return(
                                    <RentalCard rental={rental} key={idx} onClick={onClick(idx)}/>
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