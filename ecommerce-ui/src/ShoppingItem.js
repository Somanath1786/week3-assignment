import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Table, Button, TableRow, TableCell } from '@material-ui/core';
import TableRowColumn from '@material-ui/core/Table'


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
        const { classes } = this.props;
        return(
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>                        
                            <TableRow >
                                <TableCell >
                                    < img src="https://images.unsplash.com/photo-1495136568018-11a54caad6b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d19de84a578b1175e85e0811f41c97&auto=format&fit=crop&w=500&q=80" height= "75" />
                                </TableCell>
                                <TableCell>
                                    Quaint 3-bedroom home in Gamla stan
                                </TableCell>
                                <TableCell>
                                    $230
                                </TableCell> 
                                <TableCell>
                                    <Button color="inherit" variant="contained">
                                        Delete
                                    </Button>
                                </TableCell>                               
                            </TableRow>                        
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ShoppingItem); 