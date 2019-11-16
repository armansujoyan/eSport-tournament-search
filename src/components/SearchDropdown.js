import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import indigo from '@material-ui/core/colors/indigo';

const bgCol = indigo[500];

const useStyles = makeStyles(theme => ({
    list: {
        paddingTop: 0,
        paddingBottom: 0,
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        backgroundColor: bgCol,
        color: 'white'
    }
}), );

export default function SearchDropdown({ listItems }) {
    const classes = useStyles();

    if (listItems.length > 0) {
        return (
            <List className={classes.list}>
                {
                    listItems.map(item =>
                    <ListItem button key={item}>
                        <ListItemText primary='Some text'/>
                    </ListItem>)
                }
            </List>
        )
    } else {
        return (
            <List className={classes.list}>
                <ListItem>
                    <ListItemText primary='No results found' align='center'/>
                </ListItem>
            </List>
        )
    }
}
