import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import { imgUrl } from '../config'
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
}));

export default function SearchDropdown({ listItems }) {
    const classes = useStyles();

    if (listItems.length > 0) {
        return (
            <List className={classes.list}>
                {
                    listItems.map(item =>
                    <ListItem button key={item.id}>
                        <ListItemAvatar>
                            <Avatar
                                alt='trImg'
                                variant='square'
                                src={item.images && item.images.default.thumbs ?
                                imgUrl + item.images.default.thumbs.web.w50h50.jpg :
                                'no-logo.png'}/>
                        </ListItemAvatar>
                        <ListItemText primary={item.title} secondary={item.description}/>
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
