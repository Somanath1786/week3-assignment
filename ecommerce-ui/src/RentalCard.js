import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Avatar, CardMedia, CardActions, Button, IconButton } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const styles = theme => ({
    card: {
      maxWidth: 400,
      marginLeft : 20,
      marginRight : 20
    },
    avatar: {
        backgroundColor: red[500],
    },
    media: {
        objectFit: 'cover'
    },
    actions: {
        display: 'flex',
      },
  });

class RentalCard extends React.Component {    

    getRentalType(rental)
    {
        if (rental.houseType === 'Apartment')
        {
            return 'A';
        }
        else
        {
            return 'H';
        }
    }
    render() {
        const {classes, rental} = this.props;
        const location = `${rental.location.city} , ${rental.location.country}`
        const rentalLabel = this.getRentalType(rental);    
        return (
            <div>
                <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {rentalLabel}
                        </Avatar>                        
                    }                    
                    title= {rental.title}                    
                    subheader={location}
                />
                <CardMedia
                    component="img"
                    className={this.props.media}
                    height="300"
                    image={rental.image}>
                </CardMedia>

                <CardActions className={this.props.actions} disableActionSpacing>
                    <Button size="small" color="primary">
                       ${rental.payment.cost}
                    </Button>
                    <Button size="small" color="primary">
                        Add To Cart
                    </Button>                              
                </CardActions>

                </Card>                
            </div>
        );
    }
}

export default withStyles(styles)(RentalCard);