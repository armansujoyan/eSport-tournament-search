import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    list: {
        paddingTop: 0
    },
    listItemNotFound: {
        textAlign: 'center'
    }
}));

export default function SearchDropdown({ listItems }) {
    const classes = useStyles();

    if (listItems.length > 0) {
        return (
            <List className={classes.list}>
                {
                    listItems.map(item =>
                    <ListItem button>
                        <ListItemText primary='Some text'/>
                    </ListItem>)
                }
            </List>
        )
    } else {
        return (
            <List>
                <ListItem>
                    <ListItemText primary='No results found' className={classes.listItemNotFound}/>
                </ListItem>
            </List>
        )
    }
}
