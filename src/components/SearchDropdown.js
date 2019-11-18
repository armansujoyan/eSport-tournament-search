import React from 'react';
import { List, ListItem, ListItemText, CircularProgress } from '@material-ui/core';
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