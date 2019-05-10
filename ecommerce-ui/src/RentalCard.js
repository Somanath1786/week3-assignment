import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {PropTypes} from 'prop-types'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Avatar, CardMedia, CardActions, Button, IconButton } from '@material-ui/core';
import { red, yellow } from '@material-ui/core/colors';
import StarIcon from '@material-ui/icons/Star'
import RateReviewIcon from '@material-ui/icons/RateReview'

const styles = theme => ({
    card: {
      maxWidth: 400,
      marginLeft : 39,
      marginRight : 0,
      marginBottom: 40
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

    starFill: {
        color: yellow[500]
    },

    reviewFill: {
        color: red[500]
    }
  });

class RentalCard extends React.Component {

    static propTypes = {
        rental : PropTypes.shape({
            location : PropTypes.shape({
                city : PropTypes.string,
                country : PropTypes.string
                }),
            houseType : PropTypes.string,
            title : PropTypes.string,
            image : PropTypes.string
            }),
        onClick : PropTypes.func
    } 

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
        const {classes, rental, onClick} = this.props;
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
                    className={classes.media}
                    height="300"
                    image={rental.image} alt={rental.title}>
                </CardMedia>

                <CardActions className={classes.actions} disableActionSpacing>
                    <Button variant="outlined" size="small" color="primary" style={{marginRight:"5px"}}>
                       ${rental.payment.cost}
                    </Button>
                    <Button  variant="outlined" size="small" color="primary" style={{marginLeft:"5px", marginRight:"60px"}} onClick={onClick}>
                        Add To Cart
                    </Button>                    
                    <IconButton>
                        <StarIcon className= {classes.starFill}/>
                    </IconButton>
                    {rental.rating.stars}                    
                    <IconButton>
                        <RateReviewIcon className= {classes.reviewFill}/>
                    </IconButton>
                    {rental.rating.reviews}
                </CardActions>

                </Card>                
            </div>
        );
    }
}

export default withStyles(styles)(RentalCard);