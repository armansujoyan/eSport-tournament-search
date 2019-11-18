import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, CircularProgress } from '@material-ui/core';
import { imgUrlBase } from '../config';
import { makeStyles, withStyles } from '@material-ui/styles';
import indigo from '@material-ui/core/colors/indigo';

const bgCol = indigo[500];

const useStyles = makeStyles(theme => ({
    list: {
        paddingTop: 0,
        paddingBottom: 0,
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        color: 'white',
        backgroundColor: bgCol,
    }
}));

const ListItemTextWhite = withStyles({
    primary: {
        color: 'white'
    },
    secondary: {
        color: 'white'
    }
})(ListItemText);

const WhiteCircularProgress = withStyles({
    circle: { color: 'white' }
})(CircularProgress);

export default function SearchDropdown({ listItems, isLoading, addFavorite }) {
    const classes = useStyles();

    if (listItems.length > 0) {
        return (
            <List className={classes.list}>
                {
                    listItems.map(item =>
                    <ListItem button key={item.id} onClick={() => addFavorite(item.id)}>
                        <ListItemAvatar>
                            <Avatar
                                alt='trImg'
                                variant='square'
                                src={item.images && item.images.default.thumbs ?
                                imgUrlBase + item.images.default.thumbs.web.w50h50.jpg :
                                'no-logo.png'}/>
                        </ListItemAvatar>
                        <ListItemTextWhite primary={item.title} secondary={item.description}/>
                    </ListItem>)
                }
            </List>
        )
    } else if(isLoading) {
        return (<List className={classes.list}>
            <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
                <WhiteCircularProgress  size={32} thickness={5}/>
            </ListItem>
        </List>)
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
