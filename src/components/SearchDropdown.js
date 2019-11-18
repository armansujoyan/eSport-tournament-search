import React, { useEffect, useRef } from 'react';
import { List, ListItem, ListItemText, CircularProgress } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';
import SearchDropdownItem from './SearchDropdownItem';

const useStyles = makeStyles(theme => ({
    list: {
        paddingTop: 0,
        paddingBottom: 0,
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        color: 'white',
        backgroundColor: theme.palette.primary.main,
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

export default function SearchDropdown({ listItems, isLoading, handleItemClick, setDropdown }) {
    const classes = useStyles();
    const dropdownRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick, false);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick, false);
        };
    });

    const handleOutsideClick = event => {
        if(dropdownRef.current && dropdownRef.current.contains(event.target))
            return;

        setDropdown(false);
    }

    const itemsToList = item => <SearchDropdownItem
        key={item.id}
        item={item}
        clickHandler={handleItemClick}
        />

    if (listItems.length > 0) {
        return (
            <List className={classes.list} ref={dropdownRef}>
                { listItems.map(itemsToList) }
            </List>
        )
    } else if(isLoading) {
        return (
            <List className={classes.list} ref={dropdownRef}>
                <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
                    <WhiteCircularProgress  size={32} thickness={5}/>
                </ListItem>
            </List>
        )
    } else {
        return (
            <List className={classes.list} ref={dropdownRef}>
                <ListItem>
                    <ListItemText primary='No results found' align='center'/>
                </ListItem>
            </List>
        )
    }
};