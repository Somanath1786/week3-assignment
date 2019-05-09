import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Table, Button, TableRow, TableCell, TableBody } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,        
    },
});

class ShoppingItem extends React.Component {
    render() {
        const { classes, rental, onClick} = this.props;
        return(
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableBody>
                            <TableRow >
                                <TableCell width="25%" float="center">  
                                    < img src={rental.image} height= "75" alt={rental.title}/>
                                </TableCell>
                                <TableCell width="25%" float="center">
                                    {rental.title}
                                </TableCell>
                                <TableCell width="25%" flocat="center">
                                    ${rental.payment.cost}
                                </TableCell> 
                                <TableCell width="25%" float="center">
                                    <Button color="inherit" variant="contained" onClick={onClick}>
                                        Delete
                                    </Button>
                                </TableCell>                               
                            </TableRow>
                        </TableBody>                                          
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ShoppingItem); 