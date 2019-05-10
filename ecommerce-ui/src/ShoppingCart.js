import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ShoppingItem from './ShoppingItem'
import { Button, Card, Badge } from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';
import  ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';


const styles = theme => ({
    background: {
        background: lightGreen[200]         
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        float: "left",
        position: "relative",
        right:"-1%"
      },

    cartButton: {
        marginTop: 10,
        marginBottom: 10,
        float: "right",
        position: "relative",
        left:"-5%"
    },

    cartBadge : {
        marginTop: 10,
        marginBottom: 10,
        float: "right",
        position: "relative",
        left:"-18%"
    }
  });

class ShoppingCart extends React.Component {

    toggleList()
    {
       var listdivEl = document.getElementById("shoppingList");
       if (listdivEl.style.display === "none") {
        listdivEl.style.display = "block";
      } else {
        listdivEl.style.display = "none";
      }
    }

    render() {
        const { classes, selectedItems, onClick, total, items } = this.props;
        const selectedRentalsList = selectedItems
                                    .map((rental, idx) => {
                                        return(
                                            <ShoppingItem rental={rental} key={idx} onClick={onClick(idx)} />
                                        );
                                    });
        return (
            <div>
                <Card className={classes.background}>
                <Button color= "primary" variant="contained" className={classes.button} onClick={this.toggleList}> Shopping Cart </Button>
                <React.Fragment>
                <Badge badgeContent={items} className={classes.cartBadge}>
                    <ShoppingCartIcon fontSize="large" />
                </Badge>
                </React.Fragment>                    
                <Button color= "primary" variant="contained" className={classes.cartButton}>Total : ${total}</Button>
                <div id="shoppingList">
                    {selectedRentalsList}
                </div>
                </Card>
            </div>
        );
    };
}

export default withStyles(styles)(ShoppingCart);
