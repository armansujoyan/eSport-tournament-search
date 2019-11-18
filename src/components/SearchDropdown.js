import React from 'react';
import { List, ListItem, ListItemText, CircularProgress, Paper } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';
import SearchDropdownItem from './SearchDropdownItem';
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
        maxHeight: '50%',
        overflow: 'auto',
        boxShadow: `0px 8px 6px 3px rgba(0,0,0,0.2),
                    0px 5px 3px -2px rgba(0,0,0,0.14),
                    0px 1px 10px 1px rgba(0,0,0,0.12)`
    }
}));

const WhiteCircularProgress = withStyles({
    circle: { color: 'white' }
})(CircularProgress);

const SearchDropdown = React.forwardRef(({ listItems, isLoading, handleItemClick }, fRef) => {
    const classes = useStyles();

    const itemsToList = item => <SearchDropdownItem
        key={item.id}
        item={item}
        clickHandler={handleItemClick}
        />

    if (listItems.length > 0) {
        return (
            <List className={classes.list} ref={fRef}>
                { listItems.map(itemsToList) }
            </List>
        )
    } else if(isLoading) {
        return (
            <List className={classes.list} ref={fRef}>
                <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
                    <WhiteCircularProgress  size={32} thickness={5}/>
                </ListItem>
            </List>
        )
    } else {
        return (
            <List className={classes.list} ref={fRef}>
                <ListItem>
                    <ListItemText primary='No results found' align='center'/>
                </ListItem>
            </List>
        )
    }
})

export default SearchDropdown;