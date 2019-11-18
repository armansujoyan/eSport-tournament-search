import React from 'react';
import { AppBar, Input, Toolbar } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';

const inputStyles = {
    root: {
        color: 'white',
        border: 0,
        height: 48,
        padding: '0 30px'
    }
};

const SearchInput = withStyles(inputStyles)(Input);

const useStyles = makeStyles(theme => ({
    toolbar: {
        minHeight: 48
    },
    searchInput: {
        paddingLeft: 20,
        paddingRight: 20
    }
}));

export default function SearchBar(props) {
    const classes = useStyles();

    return (
        <>
            <AppBar>
                <SearchInput
                    className={classes.searchInput}
                    type='text'
                    fullWidth
                    autoFocus
                    {...props}
                />
            </AppBar>
            <Toolbar className={classes.toolbar}/>
        </>
    )
}
